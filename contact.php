<?php

    

if ( isset($_POST) && isset ($_POST['Nom']) && isset ($_POST['email']) && isset ($_POST['message'])){
        extract ($_POST);

        if (!empty ($Nom) && !empty($email) && !empty ($message)){

            $destinataire = "phylchrist@gmail.com";
            $sujet="Formulaire de contact";
            $msg ="Nouveau message  \n
            Nom : $Nom \n
            Email : $email \n
            Message : $message";
            $entete= "From : $Nom \n Reply-to : $email";
            mail ($destinataire, $sujet, $msg, $entete);

        }

        else{
            echo "vous n'avez pas rempli tous les champs";
        }
    }

?>