<?php

    $data = file_get_contents('latihan.json');
    $mahasiswa = json_decode($data, true); // berubah jadi array tambahkan true
    // var_dump($mahasiswa);
    echo $mahasiswa[0]["pembimbing"]["pembimbing1"];

?>