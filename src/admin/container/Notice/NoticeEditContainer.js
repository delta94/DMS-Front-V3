import React, { Component, Fragment } from 'react';

import NoticeWrite from '../../component/Notice/NoticeWrite';
import Loading from '../../common/Loading/Loading';

import { noticePatch, noticeContentGet } from '../../lib/notice';

class NoticeEditContainer extends Component {
  state = {
    title: '',
    content: '',
    loading: true,
  };

  TaskData = async () => {
    const { match } = this.props;
    try {
      const response = await noticeContentGet(
        'notice',
        parseInt(match.params.postId),
      );
      const { content, title } = response.data;
      this.setState({
        title: title,
        content: content,
        loading: false,
      });
    } catch (err) {
      alert('로그인이 필요합니다');
      this.props.history.push('/admin/login');
    }
  };

  componentDidMount() {
    this.TaskData();
  }

  HandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  HandleAJAX = () => {
    const { match } = this.props;
    const id = parseInt(match.params.postId);
    const { title, content } = this.state;
    noticePatch('notice', id, title, content);
    alert('글 수정에 성공했습니다!');
    this.props.history.push('/admin/notice');
  };

  HandleCancle = () => {
    alert('글 작성을 취소했습니다');
    this.props.history.push('/admin/notice');
  };

  render() {
    const { title, content, loading } = this.state;
    return (
      <Fragment>
        {loading && <Loading />}
        <NoticeWrite
          HandleCancle={this.HandleCancle}
          title={title}
          content={content}
          HandleAJAX={this.HandleAJAX}
          HandleChange={this.HandleChange}
        />
      </Fragment>
    );
  }
}

export default NoticeEditContainer;
