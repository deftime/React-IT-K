import React, {useState} from 'react';
import cls from '../../css/paginator.module.css';

function Pagination(props) {

  let [potionNumber, setPotionNumber] = useState(0);

  let numPags = Math.ceil(props.totalItems / props.count);
  let pagsArr = [];
  for (let i = 1; i <= numPags; i++) {
    pagsArr.push(i);
  }

  let potionCount = Math.ceil(numPags / 10) - 1;
  console.log(potionCount);

  let potionArr = [];
  let innerArr = [];
  for (let i = 1; i <= pagsArr.length; i++) {
    innerArr.push(i);
    if (innerArr.length === 10 || i === pagsArr.length) {
      potionArr.push(innerArr);
      innerArr = [];
    }
  }

  console.log(potionArr);


  return (
    <>
      {potionNumber > 0 ? <span className={cls.arrows} title="FIRST" onClick={()=>{setPotionNumber(0)}}>&laquo;</span> : undefined}
      {potionNumber > 0 ? <span className={cls.arrows} title="Previous" onClick={()=>{setPotionNumber(potionNumber - 1)}}>&lt;</span> : undefined}
      {potionArr[potionNumber].map( pag => <span className={`${cls.pagItem} ${props.page === pag ? cls.currPage : ''}`} onClick={()=>props.changePage(pag)} key={pag} >{pag}</span> )}
      {potionNumber < potionCount ? <span className={cls.arrows} title="Next" onClick={()=>{setPotionNumber(potionNumber + 1)}}>&gt;</span> : undefined}
      {potionNumber < potionCount ? <span className={cls.arrows} title="LAST" onClick={()=>{setPotionNumber(potionCount)}}>&raquo;</span> : undefined}
    </>
  )
}

export default Pagination;
