export const getJoin = (req, res) => {
    res.render("join", {
      pageTitle: "Join"
    })
};//join 페이지로 GET 요청이 왔을 때 보여주고
export const postJoin = (req, res) => {
    const { body: { userName, email, password, password2 } } = req;
    if (password !== password2) {
      res.status(400)
    } else {
        res.redirect(routes.home)
    }
  };//join 페이지 내에서 폼 전송이 이뤄졌을 때(=POST 요청이 왔을 때) 보여준다.
	
export const getLogin = (req, res) => {
    res.render("login", {
      pageTitle: "Login"
    })
};
export const postLogin = (req, res) => {
    console.log("로그인 성공!");
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    //TODO: 로그아웃 기능 구현
    res.redirect(routes.home);
  };
export const users = (req,res) => res.send('Users');
export const editProfile = (req,res) => {
    res.render('editprofile', {
        pageTitle: "Edit Your Profile"
    })
};
export const userDetail = (req,res) => res.send('User Detail');
export const changePassword = (req,res) => res.send('Change Password');
