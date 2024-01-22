/* eslint-disable */
import { useContext, useEffect, useState }from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; // css없이 js에서 스타일 정의, 다른 js에서 사용 X, 컴포넌트.module.css사용해도 됨
import {Nav} from 'react-bootstrap'

import {Context1} from  '../App.js'

let Btn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

let Btn2 = styled.button(Btn) // 스타일 복사

let Box = styled.div`
    background : grey;
    padding : 20px;
`

function Detail(props){

    let {stock} = useContext(Context1)

    let [alert, setAlert] = useState(true)
    let [ count, setCount] = useState(0)
    let [tap, setTap] = useState(0)

    useEffect(()=>{
        let a = setTimeout(()=>{ setAlert(false) }, 2000)
        return ()=>{
            clearTimeout(a)
        }
    }, [])

    let { id } = useParams();
    let _id = props.shoes.find(x => x.id == id);

    return(
    <div className="container">
        <div>
            {
                alert == true ? <Btn bg='pink'>2초 이내 구매시 할인</Btn> : null
            }
        </div>
      <div className="row">
        <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+(_id.id+1)+".jpg"} width="100%" />
            </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{_id.title}</h4>
          <p>{_id.content}</p>
          <p>{_id.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
        <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
        <Nav.Link onClick={()=>{setTap(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link onClick={()=>{setTap(1)}}eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link onClick={()=>{setTap(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
        </Nav>
        <TapContent tap={tap}/>
  </div>  
  )
};

function TapContent({tap}){
    /*
    if (tap ==0){
    return <div>내용0</div>
    } else if (tap ==1){
    return <div>내용1</div>
    } else if (tap ==2){
    return <div>내용2</div>
    }
    */
    let {stock} = useContext(Context1)
    let [fade, setFade] = useState('')

    useEffect(()=>{ // 2등
        let a = setTimeout(()=>{ setFade('end')}, 10)
        return()=>{ // 1등
            clearTimeout(a)
            setFade('')
        }
    }, [tap])

    return (<div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}
        </div>)
}


export default Detail;