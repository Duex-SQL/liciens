import {axiosPost} from "../libs/http.js"

function getData(options){
    const { subjectId, modelType } = options
    return new Promise((resolve,reject)=>{
        axiosPost({
            url:'/api/jztk/query',
            data:{
                subject:subjectId,
                model:modelType
            },
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}

export {
    getData
}