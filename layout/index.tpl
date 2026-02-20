<script>
    $(document).ready(function() {
        setHeight();
        $(".list-group-item").click(function(event) {
            if ($(event.target).hasClass("list-group-item")) {
                $(".list-group-item").removeClass("active");
                $(this).addClass("active");
                $("#result_on_date").removeAttr("disabled");   
            }
        });

        $(".uc_checkbox").change(function() {
            let checkBox = 0;
            for (let i = 0; i < $(".uc_checkbox").length; i++) {
                if ($(".uc_checkbox")[i].checked) {
                    checkBox = 1;
                }
            }

            if (checkBox) {
                $("#run_project_button").removeAttr("disabled")
            } else {
                $("#run_project_button").attr("disabled", true);
            }
        })
 
        $("#result_on_date").on("change", function() {
            let date_value = $("#result_on_date").val();
            if ($(".list-group-item").hasClass("active") && date_value != "") {
                let group = $(".list-group-item.active").text().trim();
                $.ajax({
                    url: "index.php",
                    type: "post",
                    data: {
                        project_group: group,
                        on_date: date_value
                    },
                    dataType: 'html',
                    success: function(data) {
                        document.getElementById("result_table").innerHTML = data;
                    },
                    beforeSend: function() {
                        activate(1);
                    },
                    complete: function() {
                        activate(0);
                    }
                });
            }
        })
    });
    function checkCheckbox() {
        let check = document.getElementById("project_group_form");
        let checked = 0;
        for (let i = 0; i < check.length; i++) {
            if (check[i].type == "checkbox" && check[i].checked) {
                checked = 1;
            }
        }
        if (checked == 0) {
            showmsg("Select project first.");
            return false;
        }
        return true;
    }
    
    function getTestcase(testcaseId) {
        $.ajax({
            url: "index.php",
            type: "post",
            data: {
                testcaseId: testcaseId,
                isAjax: 1
            },
            dataType: 'html',
            beforeSend: function(){
                activate(1);
            },
            success: function(data) {
                if (data) {
                    document.getElementById("testcase_modal").innerHTML = data;
                }
            },
            complete:function(data){
                activate(0);
                $("#testcase_details").modal();
            }
        });
    }

    window.onresize = setHeight;
    function setHeight() {
        document.getElementById("card_body").style.maxHeight = (window.innerHeight - 200) + "px";
    }
</script>
<form id="project_group_form" name="project_group_form" role="form" method="post" action="run_projects.php">
    <div class="row">
        <div class="col-lg-3 col-12 col-md-4">
            <div class="card">
                <div class="card-header font-weight-bold">Project(s)</div>
                <div class="card-body text-dark show nav-third-level p-md overflow-y" id="card_body">
                    <ul class="list-group">
                        <{foreach $project_groups as $project}>
                            <div class="list-group-item rounded-0 mb-2 project_group">
                                <label class="custom_checkbox_new mr float-left">
                                    <input type="checkbox" class="uc_checkbox pointer" id="<{$project}>_checkbox" name="project_group[]" value="<{$project}>"/>
                                    <div class="check_mark_custom"></div>
                                </label>
                                <span>
                                    <{$project}>
                                </span>
                            </div>
                        <{/foreach}>
                    </ul>
                </div>
            </div>
            <div class="mt-lg">
                <select name="run_on_domain" id="run_on_domain" class="select2 form-control">
                    <option value="https://www.ucertify.com">https://www.ucertify.com</option>
                    <option value="https://www.jigyaasa.info">https://www.jigyaasa.info</option>
                </select>
            </div>
            <div class="mt-lg">
                <input type="submit" onclick="return checkCheckbox();" id="run_project_button" name="run_project_button" class="btn btn-secondary btn-block" value="Run" disabled="disabled">
            </div>
        </div>
        <div class="col-lg-9 col-12 col-md-8">
            <div class="col-6 form-group row">
                <label class="control-label col-3 mt-sm pt-sm" for="result_on_date">Result On:</label>
                <div class="col-6">                    
                    <select name="result_on_date" id="result_on_date" class="select2 form-control form-control-md input-xlarge" disabled="disabled">
                        <option value="">Select an option</option>
                        <{html_options options=$date_list}>
                    </select>
                </div>
            </div>
            <div id="result_table">
                <div class="alert alert-success">Please select group and date.</div>
            </div>
        </div>
    </div>
</form>
