<?php
if ($_POST['local'] === null) {
    $result = ($_POST['words']);

    function pc_permute($items, $perms = [])
    {
        if (empty($items)) {
            print join(', ', $perms) . "<br>";
        } else {
            for ($i = count($items) - 1; $i >= 0; --$i) {
                $newItems = $items;
                $newPerms = $perms;
                list($foo) = array_splice($newItems, $i, 1);
                array_unshift($newPerms, $foo);
                pc_permute($newItems, $newPerms);
            }
        }
    }

    pc_permute(explode(", ", $result));
}

