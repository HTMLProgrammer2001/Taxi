import CropAnimation from './CropAnimation';
import {toast} from 'react-toastify';

class CropForm extends React.Component{
    constructor(props){
        super(props);

        this.img = new Image();
        this.animation = null;

        this.save = this.save.bind(this);
        this.onPhotoChange = this.onPhotoChange.bind(this);

        this.state = {
            loaded: false,
            file: false
        };

        this.elem = React.createRef();
    }

    componentDidUpdate(){
        if(this.state.loaded) {
            this.elem.current.width = this.img.width;
            this.elem.current.height = (this.elem.current.offsetWidth/this.img.width) * this.img.height;

            this.img.width = this.elem.current.width;
            this.img.height = this.elem.current.height;

            this.animation = new CropAnimation(this.elem.current, this.img);
        }
    }

    render(){
        return (
          <div className="d-flex flex-column align-items-center">
              <div className="custom-file">
                  <label className="custom-file-label" htmlFor="photo">Выбрать фото</label>
                  <input type="file" onChange={this.onPhotoChange} className="custom-file-input" id="photo"/>
              </div>

              {
                  this.state.file && !this.state.loaded ?
                    <div>Загрузка фото...</div>
                        :
                    !this.state.file ?
                        this.props.defaultContent
                          :
                        null
              }

              {this.state.file && this.state.loaded ?
                  <div className="d-flex flex-column align-items-center mt-3">
                      <canvas ref = {this.elem} id='cropField'>
                          Канвас не поддерживается :(
                      </canvas>

                      <div className="btn btn-primary btn-block my-1" onClick={this.save}>Сохранить</div>
                  </div>
                    :
                  null
              }
          </div>
        );
    }

    componentWillUnmount(){
        if(this.animation)
            this.animation.close();
        this.animation = null;
    }

    onPhotoChange(e){
        let file = e.target.files[0];

        //check file on errors
        if(!file.type.includes('image')){
            toast('Файл должен быть фотографией', {type: toast.TYPE.ERROR});

            this.setState({
                file: false
            });

            return;
        }

        if(file.size > 5*1024*1024){
            toast('Превышен размер фото(5Мб)', {type: toast.TYPE.ERROR});

            this.setState({
                file: false
            });

            return;
        }

        this.setState({
            file: file,
            loaded: false
        });

        this.img.src = URL.createObjectURL(file);
        this.img.onload =  () => {
            if(this.img.width < 100 || this.img.height < 100) {
                toast('Минимальные размеры изображения 100x100', {
                    type: toast.TYPE.ERROR
                });

                this.setState({
                    file: file,
                    loaded: false
                });

                return;
            }

            this.setState({
                loaded: true
            });
        };
    }

    async save(){
        let blob = await this.animation.getData();
        this.props.onChange(blob);
    }
}

export default CropForm;