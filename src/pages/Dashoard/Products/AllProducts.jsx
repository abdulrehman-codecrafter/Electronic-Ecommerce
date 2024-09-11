import { Button, Image, Space, Table } from 'antd'
import React, { useContext } from 'react'
import { ProductsContext } from '../../../contexts/ProductsContext';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (text) => <Image className='rounded-5' width={70} src={text} alt="Product Image" style={{mixBlendMode:"darken"}}/>, // Renders the image in the table
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text) => `$${text}`, // Formats the price with a dollar sign
  },
  // {
  //   title: 'Brand',
  //   dataIndex: 'brand',
  //   key: 'brand',
  // },
  // {
  //   title: 'Category',
  //   dataIndex: 'category',
  //   key: 'category',
  // },
  // {
  //   title: 'Color',
  //   dataIndex: 'color',
  //   key: 'color',
  // },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <Space size="small">
        <Button type="primary" ghost onClick={() => handleEdit(record)}>Edit</Button>
        <Button danger onClick={() => handleDelete(record)}>Delete</Button>
      </Space>
    ),
  },
];

export default function AllProducts() {
  const {products}=useContext(ProductsContext)
  return (
    <div className=" container table-responsive">
      <h1 className='text-center my-5'>All Products</h1>
      <Table columns={columns} dataSource={products} />
    </div>
  )
}
