<script>
    <{if $to_run < $files|@count}>
    $(document).ready(function() {
        <{if !$stop}>
            $("#files_form").submit();
        <{/if}>
    });
    <{/if}>
</script>
<table class="table">
    <thead>
        <tr>
            <th>S.No.</th>
            <th>File Name</th>
            <th>Pass/Fail</th>
        </tr>
    </thead>
    <tbody>
        <form id="files_form" name="files_form" role="form" action="run_and_reset_to_run.php" method="post">
            <{foreach $files as $file_to_run}>
                <tr>
                    <td><{$file_to_run@iteration}></td>
                    <{if $file_to_run@iteration - 1 < $to_run}>
                        <td>
                            <{$file_to_run}>
                        </td>
                        <td>
                            <{if $smarty.session.fail.$file_to_run}>
                                <div class="text-danger">Fail</div>
                            <{else}>
                                <div class="text-success">Pass</div>
                            <{/if}>
                        </td>

                    <{elseif $file_to_run@iteration - 1 == $to_run}>
                        <td>
                            <b><{$file_to_run}></b> is Running...
                        </td>
                        <td>
                            <div>Running</div>
                        </td>
                    <{else}>
                        <td>
                            <{$file_to_run}>
                        </td>
                        <td>
                            <div>Waiting</div>
                        </td>
                    <{/if}>
                    <input type="hidden" id="<{$file_to_run@index}>" name="<{$file_to_run@index}>" value="<{$file_to_run}>">
                </tr>
            <{/foreach}>
            <input type="hidden" id="to_run" name="to_run" value="<{$to_run}>">
            <input type="submit" id="files_submit" name="files_submit" class="hide"/>
            <{if $image}>
                Image...
            <{/if}>
        </form>
    </tbody>
</table>