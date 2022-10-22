export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '나고키',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://devdep.tistory.com/',
        }],
        Comments: [{
            User: {
                nickname : 'hero',
            },
            content: '얼른 사고싶어요~',            
        }, {            
            User: {
                nickname : 'nero',
            },
            content: '안녕하세요',   
        }]
    }],
    imagePath:[],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터 입니다.',
    User: {
        id: 1,
        nickname: '나고키',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
}

export default reducer;