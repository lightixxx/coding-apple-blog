// eslint-disable
import { useState } from 'react'

import './App.css'

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function App() {
  const [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '라이틱스',
  ])

  const [따봉, 따봉변경] = useState(0)
  const [modal, modal변경] = useState(false)

  function 제목바꾸기() {
    const newArray = [...글제목]
    newArray[0] = '여자 치마 추천'
    글제목변경(newArray)
  }

  // function 모달바꾸기() {
  //   const a
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={제목바꾸기}>버튼</button>

      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1)
            }}
          >
            👍
          </span>{' '}
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>
          {글제목[1]}
          <span onClick={() => {}}>👍</span> 0
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3
          onClick={() => {
            modal변경(true)
          }}
        >
          {글제목[2]}
          <span onClick={() => {}}>👍</span> 0
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <button
        onClick={() => {
          modal변경(!modal)
        }}
      >
        모달 열기 버튼
      </button>

      {modal === true ? <Modal /> : null}

      {/* {글제목.map((title) => {
        return (
          <div className="list">
            <h3>
              {title}
              <span>👍</span> 0
            </h3>

            <p>2월 17일 발행</p>
          </div>
        )
      })} */}
    </div>
  )
}

export default App
