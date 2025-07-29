import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

export function fileUploads(
    file: string, 
    public_id?:string, 
    overwrite?:boolean, 
    invalidate?:boolean
): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id,
                overwrite,
                invalidate,
                resource_type: 'auto', //zip files, images , different type of files
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined ) => {
                if (error) {
                    reject(error);
                } else if(result) {
                    resolve(result);
                } else {
                    reject('No response from cloudinary');
                }
            }
        );
    });
}

export function videoUploads(
    file: string, 
    public_id?:string, 
    overwrite?:boolean, 
    invalidate?:boolean
): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id,
                overwrite,
                invalidate,
                chunk_size: 50000,
                resource_type: 'video', //videos
            },
            (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined ) => {
                if (error) {
                    reject(error);
                } else if(result) {
                    resolve(result);
                } else {
                    reject('No response from cloudinary');
                }
            }   
        );
    });
}