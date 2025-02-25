export default function FollowInstagram() {

    const PhotoData = [
        {
            "id": 1,
            "src": "https://i.ibb.co.com/KpyyYQpX/Rectangle-9.png"
        },
        {
            "id": 2,
            "src": "https://i.ibb.co.com/HTC2BJjz/Rectangle-10.png"
        },
        {
            "id": 3,
            "src": "https://i.ibb.co.com/rRktrFfx/Rectangle-11.png"
        },
        {
            "id": 4,
            "src": "https://i.ibb.co.com/5xXp8FHF/Rectangle-12.png"
        },
        {
            "id": 5,
            "src": "https://i.ibb.co.com/JWyXmJCp/Rectangle-13.png"
        },
        {
            "id": 6,
            "src": "https://i.ibb.co.com/qLcKK2GQ/Rectangle-14.png"
        },
        {
            "id": 7,
            "src": "https://i.ibb.co.com/Df0Z6CPV/Rectangle-15.png"
        },
        {
            "id": 8,
            "src": "https://i.ibb.co.com/bMbj197D/Rectangle-16.png"
        }
    ]

    return (
        <div className="max-w-6xl mx-auto space-y-5">
            <div className="flex flex-col gap-2">
                <p className="text-center">Follow Us Now</p>
                <h1 className='font-rancho text-6xl text-center text-purple-600 '>
                    Follow on Instagram
                </h1>
            </div>
            <div>
                <div className="grid grid-cols-4 gap-5">
                    {
                        PhotoData.map(photo =>(
                            <div key={photo.id}>
                                <img src={photo.src} alt={`photo ${photo.id}`} ></img>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}