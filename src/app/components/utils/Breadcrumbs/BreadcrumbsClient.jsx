'use client';
import { Breadcrumb } from 'antd'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const BreadcrumbsClient = ({breadcrumbs}) => {
    const [links, setLinks] = useState([])
    useEffect(() => {
        const items = [];
        breadcrumbs?.forEach((item)=>{
            if(item.path){
                items.push({title: <Link href={item.path}>{item.title}</Link>})
            }else{
                items.push({title: item.title})
            }
        });
        setLinks(items);

    }, [breadcrumbs])
    
  return (
    <Breadcrumb className='my-2'
    items={links}
  />
  )
}

export default BreadcrumbsClient