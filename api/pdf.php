<?php
require_once '..\vendor\autoload.php';

$columns = ['ID', 'UserID', 'AutoID', 'From', 'Destination', 'Status', 'Order created', 'Order accepted', 'Order finished', 'Price'];
$records = json_decode($_GET['orders'], true);
$example = [
    'orderID' => '',
    'user' => '',
    'autoID' => '',
    'start' => '',
    'destination' => '',
    'status' => '',
    'orderCreate' => '',
    'orderAccept' => '',
    'orderFinished' => '',
    'price' => ''
];

foreach ($records as &$record){
    $record = array_filter($record, function($e){
        global $example;

        return in_array($e, array_keys($example));
    }, ARRAY_FILTER_USE_KEY);


    $record = array_merge($example, $record);
}

class PDF extends tFPDF\PDF
{

// Simple table
    function BasicTable($header, $data)
    {
        $len = count($data);

        while($len > 0){

            $record = array_shift($data);
            foreach ($header as $k => $rowTitle){
                $this->Cell(40, 8, $rowTitle, 1);
                $this->Cell(200, 8, array_values($record)[$k], 1);
                $this->Ln();
            }

            $len--;

            $this->Ln();
            $this->Ln();
        }
    }
}

$pdf = new PDF();
$pdf->AddFont('DejaVuSansCondensed','','DejaVuSansCondensed.ttf',true);
$pdf->SetFont('DejaVuSansCondensed','',14);
$pdf->AddPage("L");
$pdf->BasicTable($columns, $records);
$pdf->SetAutoPageBreak(true);

header('Content-Type: application/pdf');
echo $pdf->output();
