'use client';

import { Pagination } from 'flowbite-react';

export default function Paginasi({ Total, PageB, PageN }) {


  return (
    <Pagination 
    currentPage={PageB} 
    totalPages={Math.ceil(Total/10)}
    onPageChange={PageN}
    renderOnZeroPageCount={null}/>
  );
}