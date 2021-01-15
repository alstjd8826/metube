export const join = (req,res) => res.render('join', {pageTitle:"Join"});
export const login = (req,res) => res.send('login');
export const logout = (req,res) => res.send('logout');
export const users = (req,res) => res.send('Users');
export const userDetail = (req,res) => res.send('User Detail');
export const editProfile = (req,res) => res.send('Edit Profile');
export const changePassword = (req,res) => res.send('Change Password');
