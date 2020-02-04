<?php
require_once 'Classes\PHPExcel.php';

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

$objPHPExcel = new PHPExcel();
$activeSheet = $objPHPExcel->getActiveSheet();
$activeSheet->setTitle('Taxi History');
$activeSheet->setCellValue('A1', 'Taxi history  by ' . date('d-m-Y H:i:s', time()));
$activeSheet->getStyle("A1")->getFont()->setSize(16);

//output headers
$activeSheet->fromArray($columns, NULL, 'A3');
//output values
$activeSheet->fromArray($records, NULL, 'A4');

header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="history' . time() . '.xlsx"');
header('Cache-Control: max-age=0');

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
$objWriter->save('php://output');
