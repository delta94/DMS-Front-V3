import React from 'react';
import { Link } from 'react-router-dom';

import Woman from '../../../assets/illust/woman2.png'

import './NoticeWrite.scss'

const NoticeWrite = ({HandleCancle, HandleChange, HandleAJAX, title, content, id}) => {
    return (
        <React.Fragment>
            <div className = "notice-write--button--wrapper">
                <div className = "notice-write--button--detail notice-write">
                    <Link to = "/admin/notice" className = "notice-write--button"  style = {{opacity: '0.4'}}>공지사항</Link>
                    <div className = "notice-write--button">글작성</div>
                    <img src = {Woman} alt = "notice-write" className = "notice-write--button--illust"/>
                </div>
            </div>
            <div className = "notice-write--wrapper">
                <div className = "notice-write--title--wrapper">
                    <input onChange = {HandleChange} value = {title} name = "title" className = "notice-write--title" placeholder = "제목을 입력해주세요."/>
                </div>
                <div className = "notice-write--content--wrapper">
                    <textarea onChange = {HandleChange} value = {content} name = "content" className = "notice-write--content" placeholder = "글내용을 입력해주세요." />
                </div>
                <div className = "notice-write--content--button--wrapper">
                    <div onClick = {() => HandleAJAX(id)} className = "notice-write--content--button write">작성완료</div>
                    <div onClick = {HandleCancle} className = "notice-write--content--button cancel">취소하기</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NoticeWrite;