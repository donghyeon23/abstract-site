class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        let idx = this.boards.findIndex(obj => obj.name === board.name)
        if (idx === -1) {
            board.in = 'O'
            this.boards.push(board);
        }
        else throw new Error('중복된 보드명을 사용할수 없습니다.');
    }

    findBoardByName(board) {
        let idx = this.boards.findIndex(obj => obj.name === board)
        return this.boards[idx]
    }

    CheckBoardName(board) {
        let idx = this.boards.findIndex(obj => obj.name === board)
        return this.boards[idx].name
    }
}
class Board {
    constructor(name) {
        this.name = name;
        this.articles = [];
        this.in = null;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value === '' || value === null) throw new Error('보드명을 입력해주세요');
        else this._name = value;
    }

    publish(article) {
        const today = new Date();
        const randomNum = Math.random() * 1000
        const randomNumFloor = Math.floor(randomNum + 100)
        if (this.in === 'O') {
            article.id = `${this.name}-${randomNumFloor}`
            article.createdDate = today.toISOString()
            article.in = 'O'
            this.articles.push(article);
        } else throw new Error('사용불가능한 보드입니다.');
    }

    getAllArticles() {
        return this.articles
    }

}
class Article {
    constructor({ subject, content, author }) {
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.id = null;
        this.createdDate = null;
        this.in = null;
        this.comments = [];
    }
    get subject() {
        return this._subject;
    }

    get content() {
        return this._content;
    }

    get author() {
        return this._author;
    }

    set subject(value) {
        if (value === '' || value === null) throw new Error();
        else this._subject = value;
    }

    set content(value) {
        if (value === '' || value === null) throw new Error();
        else this._content = value;
    }

    set author(value) {
        if (value === '' || value === null) throw new Error();
        else this._author = value;
    }

    reply(comment) {
        const today = new Date();
        if (this.in === 'O') {
            comment.createdDate = today.toISOString()
            this.comments.push(comment);
        } else throw new Error('등록되지 않은 글입니다.');

    }

    getAllComments() {
        return this.comments
    }
}
class Comment {
    constructor({ content, author }) {
        this.content = content;
        this.author = author;
        this.createdDate = null;
    }

    get content() {
        return this._content;
    }

    get author() {
        return this._author;
    }

    set content(value) {
        if (value === '' || value === null) throw new Error();
        else this._content = value;
    }

    set author(value) {
        if (value === '' || value === null) throw new Error();
        else this._author = value;
    }

}


module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
