<!DOCTYPE html>
<html>
    <head>
        <title>Test case</title>
        <script>
            function convert_to_inputbox(tr_obj) {
                let tr_ref = document.getElementById(tr_obj.id);
                console.log(tr_obj.children.length)
                let tr_len = tr_obj.children.length;
                for(let i = 1; i < (tr_len - 1); i++) {
                    let input_field;
                    // if(i !== 2) {
                    //     input_field = document.createElement("input");
                    //     input_field.type = "text";
                    // } else {
                    //     input_field = document.createElement("textarea");
                    //     input_field.cols = 50;
                    //     input_field.rows = 5;
                    // }
                    input_field = document.createElement("textarea");
                    input_field.cols = 50;
                    input_field.rows = 5;
                    input_field.value = tr_obj.children[i].innerHTML.trim();
                    tr_obj.children[i].innerHTML = "";
                    tr_obj.children[i].appendChild(input_field);
                    // console.log(tr_obj.children[i].innerHTML)
                }

            }
        </script>
    </head>
    <body>
        <table border="1">
            <tr id="tr0">
                <th>S.No.</th>
                <th>Phase ID</th>
                <th>Test Steps</th>
                <th>Expected Result</th>
                <th>Actual Result</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            <tr id="tr1" ondblclick="convert_to_inputbox(this);">
                <td>1</td>
                <td>1010</td>
                <td>1. Open the ucertify.com
                    2. Login here.</td>
                <td>Will login to ucertify</td>
                <td>this is logins</td>
                <td>Pass</td>
                <td>Edit/Version History</td>
            </tr>
            <tr id="tr2">
                <td>2</td>
                <td>1010</td>
                <td>1. Click on the Logout button</td>
                <td>This will logout the user.</td>
                <td>This is not logouts user</td>
                <td>Fails</td>
                <td>Edit/Version History</td>
            </tr>
        </table>
    </body>
</html>
