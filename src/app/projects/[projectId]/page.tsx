interface props{
    params:Promise<{
        projectId:string
    }>
};

const Page=async({params}:props)=>{
    const {projectId}=await params;

    return(
        <div>
            Project ID is:{projectId}
        </div>
    )
};

export default Page;