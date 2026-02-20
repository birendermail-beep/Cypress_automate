<?php
// $cypressDirPath = "F:/cypresstestings/myprojects/cypress/";
// $integrationDirPath = $cypressDirPath . "integration";
// $screenshortDirPath = $cypressDirPath . "screenshort";
// showDir($integrationDirPath, false);

// function showDir($dir_path, $add_dir)
// {
//     $path = "F:/cypresstestings/myprojects/cypress/integration";
//     $screenshortDirPath = "F:/cypresstestings/myprojects/cypress/screenshots";
//     if ($add_dir) {
//         $path = $path."/".$dir_path;
//         $screenshortDirPath = $screenshortDirPath."/".$dir_path;
//     }

//     $dirhandel = opendir($path) or die("Not open");
//     echo "<ul>";
//     while ($dir = readdir($dirhandel)) {
//         if ($dir != "." && $dir != "..") {
//             if (is_file($path . "/" . $dir)) {
//                 $err_img = [];
//                 if (file_exists($screenshortDirPath)) {
//                     $err_img = loadIamge($screenshortDirPath."/".$dir);
//                 }
//                 echo "<li>$dir_path/<b>$dir</b><span style='color: red;'> Fail: ".count($err_img)."</span></li>";
//                 echo "<ul>";
//                 foreach($err_img as $img) {
//                     $img_name = explode("--", $img);
//                     echo "<li><a href='uploads/$img'>$img_name[1]</a></li>";
//                 }
//                 echo "</ul>";

//             } else {
//                 if (!$add_dir) {
//                     showDir($dir, true);
//                 } else {
//                     showDir("$dir_path/$dir", true);
//                 }
//             }
//         }
//     }
//     echo "</ul>";
// }

// function loadIamge($path) {
//     $img_arr = [];
//     if (file_exists($path)) {
//         $img_dir_handl = opendir($path);
//         while ($img_file = readdir($img_dir_handl)) {
//             if ($img_file != "." && $img_file != "..") {
//                 $img_arr[] = $img_file;
//             }
//         }
//     }
//     return $img_arr;
// }

// if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//     foreach ($_FILES['files']['name'] as $i => $name) {
//         if (strlen($_FILES['files']['name'][$i]) > 1) {
//             move_uploaded_file($_FILES['files']['tmp_name'][$i], 'uploads/' . $name);
//         }
//     }
// }

?>
<h3>
    <a href="setup_project.php">Setup New Project</a>
</h3>
<h4>All Projects</h4>
<?php
// $dirhandel = opendir("Project_details");
// while ($dir = readdir($dirhandel)) {
//     if ($dir != "." && $dir != "..") {
//         $dir = explode(".", $dir);
//         echo "<div><a href='show_result.php?project_group=$dir[0]'>$dir[0]</a></div>";
//     }
// }
ini_set('max_execution_time', 0);
error_reporting(E_ALL);
try {

    echo exec('cd cypress_files && "./node_modules/.bin/cypress" run');

} catch (Exception $e) {
    echo $e->getMessage();
}

?>
