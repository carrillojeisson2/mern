import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Global from "../Global";
import Sidebar from "./Sidebar";

class CreateArticle extends Component {
  url = Global.url;
  titleRef = React.createRef();
  contentRef = React.createRef();


  state = {
    article: {},
    status: null,
    selectedFile: null,
  };

  changeState = () => {
    this.setState({
      article: {
        title: this.titleRef.current.value,
        content: this.contentRef.current.value,

      },
    });
  };

  saveArticle = (e) => {
    e.preventDefault();

    this.changeState();

    axios.post(this.url + "save", this.state.article).then((res) => {
      if (res.data.article) {
        this.setState({
          artilce: res.data.article,
          status: "waiting",
        });


          // subir imagen
          if(this.state.selectedFile !== null){

            var articleId = this.state.article._id;
  
            const formdata = new FormData();
  
            formdata.append(
              'file0',
              this.state.selectedFile,
              this.state.selectedFile.name
            )
  
            // peticion ajax
            axios.post(this.url + 'upload-image/' + articleId, formdata)
              .then(res => {
                if(res.data.article) {
                  this.setState({
                    article: res.data.article,
                    status: 'success'
                  })
                }else{
                  this.setState({
                    article: res.data.article,
                    status: 'failed'
                  })
                }
              })
  
          }else{
            this.setState({
              status: "success",
            });
          }


      

        
      
      } else {
        this.setState({
          status: "failed",
        });
      }
    });
  };

  fileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
    console.log(this.state)
  };

  render() {
    if (this.state.status === "success") {
      return <Redirect to="/blog" />;
    }

    return (
      <div className="center">
        <section id="content">
          <h1 className="subheader">Crear Articulo</h1>

          <form className="mid-form" onSubmit={this.saveArticle}>
            <div className="form-group">
              <label htmlFor="title">Titulo</label>
              <input
                type="text"
                name="title"
                ref={this.titleRef}
                onChange={this.changeState}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Contenid</label>
              <textarea
                name="content"
                ref={this.contentRef}
                onChange={this.changeState}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="file0">Image</label>
              <input type="file" name="file0" onChange={this.fileChange} />
            </div>
            <input type="submit" value="Guardar" className="btn btn-success" />
          </form>
        </section>

        <Sidebar />
      </div>
    );
  }
}

export default CreateArticle;
