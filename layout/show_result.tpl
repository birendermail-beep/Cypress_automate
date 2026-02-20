<{if $error_msg}>
    <div class="alert alert-danger">
        <{$error_msg}>
    </div>
<{else}>
    <div id="testcase_modal"></div>
    <table class="table table-bordered table-hover table-striped table_search sortmytable mb-0" id="testcase_details" tablesorter="">
        <thead>
            <tr class="always_show">
                <th>#</th>
                <th>File</th>
                <th>Fails</th>
                <th>Screenshots</th>
                <th>Video</th>
                <th>Testcase</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <{$sr = 1}>
            <{foreach $contents as $content}>
                <tr>
                    <td><{$sr}></td>
                    <{$sr = $sr + 1}>
                    <td><{$contents[$content@iteration]['file_name']}></td>
                    <td>
                        <{if $contents[$content@iteration]['image'] != ""}>
                            <span class="text-danger">Fail</span>
                        <{else}>
                            <span class="text-success">Pass</span>
                        <{/if}>
                    </td>
                    <td>
                        <button type="button" data-toggle="modal" <{if $contents[$content@iteration]['image'] != ''}> data-target="#<{$content@iteration}>" class="btn"<{else}> class="btn disabled" disabled="disabled"<{/if}>>
                            <span class="icomoon-images-2" data-toggle="tooltip" title="Screenshots"></span>
                        </button>
                    </td>
                    <td>
                        <button type="button" data-toggle="modal" <{if $contents[$content@iteration]['video'] != ''}> data-target="#<{$content@iteration}>video" class="btn"<{else}> class="btn disabled" disabled="disabled"<{/if}>>
                            <span class="icomoon-help-video-24px" data-toggle="tooltip" title="Screenshots"></span>
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn"  rel="tooltip" data-original-title="Previous Week" onClick="getTestcase(<{$contents[$content@iteration]['testcaseid']}>);">
                            <span class="icomoon-file"></span>
                        </button>
                    </td>
                    <td>
                        <a <{if $contents[$content@iteration]['image'] != ''}>href="sending_mail.php?id=<{$content['testcaseid']}>&&img_url=<{$UCERTIFY_USER}><{$content['group']}>/<{$content['image']}>&&group=<{$content['group']}>"<{else}> href="#"<{/if}>>Send Mail</a>
                    </td>
                </tr>
                <{if $contents[$content@iteration]['image'] != ''}>
                    <div class="modal" id="<{$content@iteration}>">
                        <div class="modal-dialog modal-dialog-centered m-0 w-100 mb-5">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Fail Screenshots</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <img src="<{$UCERTIFY_USER}><{$contents[$content@iteration]['group']}>/<{$contents[$content@iteration]['image']}>" height="200" class="w-100" alt="<{$UCERTIFY_USER}><{$contents[$content@iteration]['group']}>/<{$contents[$content@iteration]['image']}>">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <{/if}>
                <{if $contents[$content@iteration]['video'] != ''}>
                    <div class="modal" id="<{$content@iteration}>video">
                        <div class="modal-dialog modal-dialog-centered m-0 w-100 mb-5">
                            <div class="modal-content" style="height: 700px;">
                                <div class="modal-header">
                                    <h4 class="modal-title">Fail Video</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body overflow-initial">
                                    <div class="d-flex justify-content-center">
                                        <video class="w-75 border border-primary" controls>
                                            <source src="<{$contents[$content@iteration]['video']}>" type="video/mp4">
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <{/if}>
            <{/foreach}>
        </tbody>
    </table>
<{/if}>