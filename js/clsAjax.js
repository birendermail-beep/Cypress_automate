// class clsAjaxRequest {
//     constructor() {

//     }

//     getMasterGroupData(group) {
//         $.ajax({
//             url: "index.php",
//             type: "post",
//             data: {
//                 master_group: group
//             },
//             dataType: 'html',
//             beforeSend: function(){
//                 activate(1);
//             },
//             success: function(data) {
//                 document.getElementById("table_container").innerHTML = data;
//             },
//             complete:function(data){
//                 activate(0);
//             }
//         });
//     }

//     saveTestcase(fields) {
//         $.ajax({
//             url: "index.php",
//             type: "post",
//             data: {
//                 fields: fields,
//                 isSave: 1
//             },
//             dataType: 'html',
//             beforeSend: function(){
//                 activate(1);
//             },
//             success: function(data) {
//                 if (data) {
//                     console.log(data);
//                 }
//             },
//             complete:function(data){
//                 activate(0);
//             }
//         });
//     }
// }


// $(function () {
//     $('#save_action').on('submit', function (e) {
//         // e.preventDefault();
//         // $.ajax({
//         //     type: 'post',
//         //     url: 'index.php',
//         //     data: $('form').serialize(),
//         //     success: function () {
//         //         alert('form was submitted');
//         //     }
//         // });
//         console.log($('#save_action').serialize());
//     });

// });

$(document).ready(function() {
    $("#save_action").click(function(e) {
        $.ajax({
            type: 'post',
            url: 'index.php',
            data: {
                action_type: action_os.value,
                action_sub_type: action_browser.value,
                action_detail: action_details.value,
                bug_id: bug_id.value,
                action_status: action_status.value,
                add_action: 1,
                testcase_id: action_testcase_id.value
            },
            dataType: 'html',
            beforeSend: function(){
                $("#action_modal_close").click();
                activate(1);
            },
            success: function ($data) {
                activate(0);
                showmsg("Data saved successfully!");
                console.log($data);
            }
        });
    })
})

function showSideDetail(testcaseId) {
    $.ajax({
        url: "index.php",
        type: "post",
        data: {
            testcase_id: testcaseId,
            isAjax: 1,
            isSide: 1
        },
        dataType: 'html',
        beforeSend: function(){
            activate(1);
        },
        success: function(data) {
            if (data) {
                document.getElementById("side_data").innerHTML = data;
            }
        },
        complete:function(data){
            activate(0);
        }
    });
}

function showEditModal(testcaseId) {
    $.ajax({
        url: "index.php",
        type: "post",
        data: {
            testcase_id: testcaseId,
            isAjax: 1,
            isEditModal: 1
        },
        dataType: 'html',
        beforeSend: function(){
            activate(1);
        },
        success: function(data) {
            if (data) {
                let json_data = JSON.parse(data);
                testcase_id.value = json_data[0].testcase_id;
                master_project_id.value = json_data[0].master_project_id;
                phase_id.value = json_data[0].phase_id;
                created_by.value = json_data[0].created_by;
                created_on.value = json_data[0].created_on;
                document.getElementById("status").removeAttribute("disabled");
                document.getElementById("verified_status").removeAttribute("disabled");
                $("#status").val(json_data[0].status);
                module_name.value = json_data[0].module_name;
                testcase_name.value = json_data[0].testcase_name;
                let testcase_detail_data = JSON.parse(json_data[0].testcase_detail)
                
                test_steps.value = testcase_detail_data.test_steps;
                test_data.value = testcase_detail_data.test_data;
                post_condition.value = testcase_detail_data.post_condition;
                expected_result.value = testcase_detail_data.expected_result;
                pre_condition.value = testcase_detail_data.pre_condition;
                actual_result.value = testcase_detail_data.actual_result;
                screenshot.value = testcase_detail_data.screenshot;

                $("#verified_field").removeClass("hide");
                $("#verified_status").val(json_data[0].verified_status);
                
            }
        },
        complete:function(data){
            activate(0);
            $("#add_testcase_modal").modal()
        }
    });
}

function showActionModal(testcaseId) {
    $.ajax({
        url: "index.php",
        type: "post",
        data: {
            testcaseId: testcaseId,
            isAjax: 1,
            isActionModal: 1
        },
        dataType: 'html',
        beforeSend: function(){
            activate(1);
        },
        success: function(data) {
            if (data) {
                console.log(data);
            }
        },
        complete:function(data){
            activate(0);
        }
    });
}
document.addEventListener("click", function(e) {
    if ($(e.target).hasClass("status_edit")) {
        console.log("Edit the Status");
    } else if($(e.target).hasClass("action")) {
        action_testcase_id.value = (e.target.closest("tr")).id;
    } else if ($(e.target).hasClass("edit")) {
        showEditModal((e.target.closest("tr")).id)
    } else if($(e.target.closest("tr")).hasClass("table_row") && (!$(e.target).hasClass("text-center")) && (!$(e.target).hasClass("icomoon-new-24px-gear-1"))) {
        let target_tr = e.target.closest("tr");
        $(".table_selected_row").removeClass("table_selected_row");
        $(target_tr).addClass("table_selected_row");
        showSideDetail(target_tr.id);
    }
})

let new_button_ref = document.getElementById("new_btn");
new_button_ref.addEventListener("click", function() {
    let fields_only_edit = [""]
    if (testcase_id.value != "") {
        testcase_id.value = "";
        master_project_id.value = "";
        phase_id.value = "";
        module_name.value = "";
        testcase_name.value = "";
        test_steps.value = "";
        test_data.value = "";
        post_condition.value = "";
        expected_result.value = "";
        pre_condition.value = "";
        actual_result.value = "";
        screenshot.value = "";
    }
    document.getElementById("verified_status").setAttribute("disabled", "disabled");
    document.getElementById("status").setAttribute("disabled", "disabled");
    $("#verified_field").addClass("hide");
    verified_status.value = "";
    $("#add_testcase_modal").modal();
})

function checkForm(form_id) {
    let check = document.getElementById(form_id);
    let checked = 0;
    for (let i = 0; i < check.length; i++) {
        if ((check[i].type == "text" || check[i].type == "textarea") && check[i].value == "") {
            check[i].parentNode.classList.add("has-error");
            check[i].parentNode.childNodes[3].classList.remove('hide');
            check[i].focus();
            return false;
        }
        check[i].parentNode.classList.remove("has-error");
        check[i].parentNode.childNodes[3].classList.add('hide');
    }
    return true;
}

$(document).ready(function() {
    setHeight();
})
window.onresize = setHeight;
function setHeight() {
    document.getElementById("left_side").style.height = (window.innerHeight - 50) + "px";
    document.getElementById("right_side").style.height = (window.innerHeight - 50) + "px";
}
