<?php
// Set your return content type
header('Content-type: application/json');

// Website url to open
$url = $_GET['url'];

foreach ($_GET as $key => $value)
{
	if ($key != 'url')
	{
		$url = $url.$key.'='.$value.'&';
	}
}

// Get that website's content
$handle = fopen($url, "r");

// If there is something, read and return
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}

?>