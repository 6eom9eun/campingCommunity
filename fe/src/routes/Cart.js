import { Table } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { changeName } from '../store.js';

function Cart(){

    let state = useSelector((state)=>{ return state }) // 간단한 프로젝트는 props로 전달하는 것이 더 편하다.
    let dispatch = useDispatch();

    return(
        <div>
            {state.user}
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>
                            <tr key={i}>
                                <td>1</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(changeName())
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;