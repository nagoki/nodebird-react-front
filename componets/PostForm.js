import React, { useCallback, useState } from "react";
import { Button, Form, Input } from 'antd';
import { useSelector } from "react-redux";

const PostForm = () => {
    const { imagePaths } = useSelector((state) => state.post);
    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, [])
    const onSubmit = useCallback(() => {

    }, []);
    return (
        <Form style={{ margin: '10px 0 20px '}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
                value={text} 
                onChange={onChangeText} 
                maxLenth={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
            </div>
        </Form>
    )
}

export default PostForm;