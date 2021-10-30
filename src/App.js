// eslint-disable
import { useState } from 'react'

import './App.css'

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
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
  const [누른제목, 누른제목변경] = useState(0)

  function 제목바꾸기() {
    const newArray = [...글제목]
    newArray[0] = '여자 치마 추천'
    글제목변경(newArray)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={제목바꾸기}>버튼</button>

      {/* <button
        onClick={() => {
          누른제목변경(0)
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          누른제목변경(1)
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          누른제목변경(2)
        }}
      >
        버튼3
      </button> */}

      <button
        onClick={() => {
          modal변경(!modal)
        }}
      >
        모달 열기 버튼
      </button>

      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}

      {글제목.map((title, i) => {
        return (
          <div className="list">
            <h3
              onClick={() => {
                누른제목변경(i)
              }}
            >
              {title}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1)
                }}
              >
                👍
              </span>
              {따봉}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default App
