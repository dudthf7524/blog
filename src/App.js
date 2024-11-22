
import React, { useState } from 'react';
import './App.css';

function App() {
   // 글제목 변경 함수
   const changeTitle = () => {
    let copy = [...글제목];
    copy[0] = post2;
    글제목변경(copy);
  };

  // 가나다순 정렬 함수
  const sortTitles = () => {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy);
  };

  // 좋아요 증가 함수
  const incrementLikes = () => {
    let copy = [...따봉];
    copy[i]= copy[i]+1;
    따봉변경(copy);
  };

  let post = '강남 우동 맛집';
  let listData=['남자코트 추천',post,'파이썬 독학'];
  let [글제목, 글제목변경] = useState([listData[0], listData[1], listData[2]])
  let [따봉, 따봉변경] = useState([0,0,0])
  let post2 = '여자코트 추천';
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  const titleClick = () =>{
    setModal(!modal);
    setTitle(i)
  }

  var 어레이 = [];
  for (var i = 0; i < 글제목.length; i++) {
    어레이.push(
      <div>
        <h4 onClick={titleClick}>{글제목[i]}
          <span className='like' onClick={incrementLikes}>👍</span>{따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    )
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <button onClick={changeTitle}>변경</button>
      <button onClick={sortTitles}>가나다순 정렬</button>
      <div className="list">
        {
          글제목.map(function(a,i){
            return(
            <div>
              <h4 className='like' onClick={()=>{ setModal(!modal); setTitle(i); }}>{글제목[i]}
                <span className='like' onClick={()=>{
                  let copy = [...따봉];
                  copy[i]= copy[i]+1;
                  따봉변경(copy);
                }}>👍</span>{따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1)
                글제목변경(copy);
              }}>삭제</button>
            </div>
            )
          })
        }
    
      </div>
      <input value={입력값} onChange={(e)=>{
        
        입력값변경(e.target.value)
        console.log(입력값)
      }} />
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
        입력값변경('');
        let copy2 = [...따봉]
        copy2.push(0)
        따봉변경(copy2)
      }}>글발행</button>
      {
        modal === true ? <Modal 글제목 = {글제목} title = {title} changeTitle={changeTitle}></Modal> : null
      }
      <Modal2></Modal2> 
    
    </div>
  );
}
class Modal2 extends React.Component {
  constructor(){
    super();
    this.state={
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>
        안녕{this.state.name}{this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
          this.setState({name : 'choi'})
        }}>버튼</button>
      </div>
    )
  }
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle}>글수정</button>
    </div>
  )
}
export default App;
