import {
    videos
  } from "../db";
   
export const home = (req, res) => {
    res.render("home", {
      pageTitle: "Main",
      videos //videos 라고만 써도 돼요!
    });
};
export const search = (req,res) => {
    const { 
        query: { 
            term: searchTerm 
        }
      } = req;
      res.render("search", {
        pageTitle: "Search",
        searchTerm,
        videos
      });
    };
// export const videos = (req,res) => res.send('Videos');
	
export const getUpload = (req, res) => {
    res.render("videoUpload", {
      pageTitle: "Upload your video"
    })
  }
   
  export const postUpload = (req, res) => {
    const {
        body: {
          videoFile,
          videoTitle,
          videoDesc
        }
      } = req;
      res.redirect(routes.home)
    }
export const videoDetail = (req,res) => res.send('Video Detail');
export const editVideo = (req,res) => res.send('Edit Video');
export const deleteVideo = (req,res) => res.send('Delete Video');
	
