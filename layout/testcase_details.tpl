<div class="modal" id="testcase_details">
    <div class="modal-dialog modal-dialog-centered w-75">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Testcase Details</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <{assign var=testcase_detail value=$raw_data['testcase_detail']|json_decode:1}>
                <div class="pl-0 row">
                    <div class="col-md-6 pl-md">
                        <b>Project Group:</b>
                        <span>
                            <{$raw_data['master_project_id']}>
                        </span>
                    </div>
                    <div class="col-md-6 pl-md">
                        <b>Phase ID:</b>
                        <span>
                            <{$raw_data['phase_id']}>
                        </span>
                    </div>
                </div>
                <div class="pl-0 row">
                    <div class="col-md-6 pl-md">
                        <b>Pre Condition:</b>
                        <span>
                            <{$testcase_detail['pre_condition']}>
                        </span>
                    </div>
                    <div class="col-md-6 pl-md">
                        <b>Test steps:</b>
                        <span>
                            <{$testcase_detail['test_steps']}>
                        </span>
                    </div>
                </div>
                <div class="pl-0 row">
                    <div class="col-md-6 pl-md">
                        <b>Test Data:</b>
                        <span>
                            <{$testcase_detail['test_data']}>
                        </span>
                    </div>
                    <div class="col-md-6 pl-md">
                        <b>Post Condition:</b>
                        <span>
                            <{$testcase_detail['post_condition']}>
                        </span>
                    </div>
                </div>
                <div class="pl-0 row">
                    <div class="col-md-6 pl-md">
                        <b>Expected Result:</b>
                        <span>
                            <{$testcase_detail['expected_result']}>
                        </span>
                    </div>
                    <div class="col-md-6 pl-md">
                        <b>Actual Result:</b>
                        <span>
                            <{$testcase_detail['actual_result']}>
                        </span>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
            </div>
        </div>
    </div>
</div>