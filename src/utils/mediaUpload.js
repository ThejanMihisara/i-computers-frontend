import {createClient} from '@supabase/supabase-js'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyeWtrcHVzenpqZ3ZpamJhaGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxODY3NTYsImV4cCI6MjA4NTc2Mjc1Nn0.jFfTF21eZc0m0t_L5plSAH8Qcxm0qk8n4I_yGve6iHU"
const supabaseUrl = "https://srykkpuszzjgvijbahbt.supabase.co"

const supabase = createClient(supabaseUrl,supabaseKey)




export default function uploadfile(file){
    return new Promise((resolve,reject)=>{
        if(file === null){
            reject("No file provided");
            return
        }
        const timestamp = new Date().getTime()
        const fileName = timestamp + "-" +file.name;

        supabase.storage.from("images").upload(fileName,file,{
            cacheControl:"3600",
            upsert:false
        }).then(
            ()=>{
                const url = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl
                resolve(url)
            }
        ).catch((err)=>{
            reject("File upload failed. Please try again.")
        })
    })
}