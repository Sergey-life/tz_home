<?php
$result = ($_POST['words']);
if (isset($_POST['local'])) {
    exit();
}else {
    function pc_permute($items, $perms = [])
    {
        if (empty($items)) {
            print join(', ', $perms) . "<br><p></p>";
        } else {
            for ($i = count($items) - 1; $i >= 0; --$i) {
                $newItems = $items;
                $newPerms = $perms;
                list($foo) = array_splice($newItems, $i, 1);
                array_push($newPerms, $foo);
                pc_permute($newItems, $newPerms);
            }
        }
    }

    pc_permute(explode(", ", $result));
}

