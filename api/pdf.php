<?php
require_once 'tfpdf\tfpdf.php';

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

class PDF extends tFPDF
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
$pdf->AddFont('DejaVu','','DejaVuSansCondensed.ttf',true);
$pdf->SetFont('DejaVu','',14);
$pdf->AddPage("L");
$pdf->BasicTable($columns, $records);
$pdf->SetAutoPageBreak(true);
$pdf->Output();
