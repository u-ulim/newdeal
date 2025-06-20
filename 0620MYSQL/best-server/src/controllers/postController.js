// postController.js
// CRUD 로직

const pool = require("../models/dbPool");

exports.createPost = async (req, res) => {
  console.log("createPost 들어옴...");
  try {
    const { writer, title, content } = req.body;
    console.log(writer, title, content);
    // 배열
    const sql = `insert into posts(writer, title, content)
      values(?, ?, ?)
      `;
    const postData = [writer, title, content];

    // 객체 새로운 방식
    // const sql2 = `insert into posts(writer, title, content) set ? `;
    // const postData = { writer, title, content };
    // const [result] = pool.query(sql, postData);
    const [result] = await pool.query(sql, postData); // await 추가 꼭 ㅐㅎ야함
    console.log(result);
    res.status(201).json({ message: "Post Created", postId: result.insertId });
  } catch (error) {
    console.error("createPost error: ", error);
    res.status(500).json({ message: "Server Error" + error.message });
  }
}; //createPost() -------------------------

// 모든 포스트 목록 조회
exports.listPost = async (req, res) => {
  try {
    //1. 전체 게시글 수 가져오기
    const query = `select count(id) as count from posts`;
    const [[{ count }]] = await pool.query(query);
    console.log("count: ", count);

    //2. 전체 게시목록 가져오기
    const sql = `select id, title, content, writer, attach file, date_format(wdate, '%Y-%m-%d') as wdate from posts order by id desc`;
    const [posts] = await pool.query(sql); // await 꼭 적어주기
    // console.log(posts);
    res.json({
      data: posts,
      totalCont: count,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Server Error : ${error.message}` });
  }
}; //listPost() -----------------------------
