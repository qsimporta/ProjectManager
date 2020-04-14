import React from 'react'
import PropTypes from 'prop-types'
import "./FileInput.sass"
import InputText from "../InputText/InputText"

const FileInput = props => {

    const url = 'https://teste.integracps.com.br/uploads/'

    let realUploadButton = React.useRef<HTMLInputElement>(null)
    const [fileName, setFileName] = React.useState('Nenhum arquivo selecionado.')
    const [fileURL, setFileURL] = React.useState('')
    const onChange = e => {
        // Verifica se é URL ou Arquivo
        if (e.target.files) {
            if (e.target.files[0]) {
                setFileName(e.target.files[0].name)
                setFileURL(URL.createObjectURL(e.target.files[0]))
                props.onChangeFile(e.target.files[0], url + e.target.files[0].name)
            } else {
                setFileURL('')
                setFileName('Nenhum arquivo selecionado.')
            }
        } else {
            props.onChangeFile(null, e.target.value)
            setFileURL(e.target.value)
        }
    }

    const [isURL, setURL] = React.useState(false)

    // @ts-ignore
    // @ts-ignore
    return (
        <div className={'preview_input_container'}>
            <div className={'file_input_container'}>
                <img
                    alt={'Preview'}
                    src={fileURL === '' ? require('../../assets/preview.jpg') : fileURL}/>
                <input type={'file'}
                       name={props.fileName}
                       id={'real_file'}
                       onChange={onChange}
                       hidden
                       accept={'image/png, image/jpeg, image/jpg, image/gif'}
                       ref={realUploadButton}/>
                <div className={'buttons'}>
                    <button
                        disabled={isURL}
                        onClick={() => setURL(true)}
                        className={isURL ? 'button_secondary selected' : 'button_secondary'}>
                        URL
                    </button>
                    <button disabled={!isURL}
                            onClick={() => setURL(false)}
                            className={!isURL ? 'button_secondary selected' : 'button_secondary'}>
                        Arquivo
                    </button>
                </div>
                <div className={'arquivo_upload'} style={!isURL ? {} : {display: 'none'}}>
                    <button type={'button'} onClick={() => {
                        if (realUploadButton && realUploadButton.current) {
                            realUploadButton.current.click()
                        }
                    }}>
                        <i className={'fa fa-upload'}/>
                    </button>
                    <span>{fileName}</span>
                </div>
                <InputText
                    name={props.urlName}
                    style={!isURL ? {display: 'none'} : {width: '100%'}}
                    label={'URL da foto'}
                    onChange={onChange}/>
            </div>
        </div>
    )
}

FileInput.propTypes = {
    onChangeFile: PropTypes.func,
    data: PropTypes.any,
    setData: PropTypes.func,
    fileName: PropTypes.string.isRequired,
    urlName: PropTypes.string.isRequired,
}


export default FileInput
