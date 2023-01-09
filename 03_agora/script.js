// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
    const li = document.createElement("li"); // li 요소 생성
    li.className = "commentContainer"; // 클래스 이름 지정

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    const avatarImg = document.createElement('img');
    avatarImg.src = obj.avatarUrl;
    avatarImg.alt = obj.author;
    avatarImg.className = "avatarImg";

    avatar.append(avatarImg);

    const comment = document.createElement("div");
    comment.className = "comment";
    const commentTitle = document.createElement('h2');
    commentTitle.className = "commentTitle";
    const commentLink = document.createElement('a');
    commentLink.href = obj.url;
    commentLink.textContent = obj.title;

    const commentInfo = document.createElement('div');
    commentInfo.className = "commentInformation";
    commentInfo.textContent = `${obj.author} / ${obj.createdAt}`;

    comment.append(commentTitle);
    commentTitle.append(commentLink);
    comment.append(commentInfo);

    const answeredAllBox = document.createElement("div");
    const answeredBox = document.createElement("div");
    const checkBox = document.createElement("p");
    answeredAllBox.className = "answeredAllBox";
    answeredBox.className = "commentAnsered";
    checkBox.textContent = "☑";
    answeredAllBox.append(answeredBox);
    answeredBox.append(checkBox);
    
    
    const answeredMark = "☑";
    const unansweredMark = "◻︎";
    
    if(obj.answer === null){
        checkBox.textContent = unansweredMark
    }else{
        checkBox.textContent = answeredMark
        const answerLinkBox = document.createElement("button");
        const answerLink = document.createElement("a");
        answerLinkBox.className = "answerBtn"
        // answerLink.href = obj.answer.url
        answerLink.textContent = "답변 보기"
        answeredAllBox.append(answerLinkBox);
        answerLinkBox.append(answerLink);
    }

    // if(checkBox.textContent = answeredMark){
    // }

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.

    const answerBtn = document.createElement("button");
    answerBtn.className = "discussion__answer__button";
    answerBtn.textContent = "답변 보기";
    
    li.append(avatar, comment, answeredAllBox);
    return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
     for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
       element.append(convertToDiscussion(agoraStatesDiscussions[i]));
     }
     return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.commentContainer");
render(ul);



function Inputinform(name,title,content){
    this.id = name;
    this.author = name;
    this.createdAt = new Date().toLocaleString();
    this.title = title;
    this.avatarUrl = "https://avatars.githubusercontent.com/u/50021232?v=4"
}

const submitBtn = document.querySelector('.form');

submitBtn.addEventListener('submit',(e) => {
    e.preventDefault();
    const nameTxt = document.querySelector('#name');
    const titleTxt = document.querySelector('#title');
    const contentTxt = document.querySelector('#content');
    
    const newObj = new Inputinform(nameTxt.value,titleTxt.value,contentTxt.value);
    agoraStatesDiscussions.unshift(newObj);

    const community = convertToDiscussion(agoraStatesDiscussions[0],0);
    ul.prepend(community);
    
    nameTxt.value = titleTxt.value = contentTxt.value = '';
})