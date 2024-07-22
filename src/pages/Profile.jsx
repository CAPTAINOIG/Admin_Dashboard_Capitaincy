import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import cover from '../assets/image/cover.png';
import user06 from '../assets/image/user06.png';
import google from '../assets/image/google.svg'
import twitter from '../assets/image/twitter.svg'
import github from '../assets/image/github.svg'
import vee from '../assets/image/vee.svg'
import facebook from '../assets/image/facebook.svg'
import { Link } from 'react-router-dom';

const Profile = () => {
    const [uploadImage, setUploadImage] = useState('');
    const [coverUpload, setCoverUpload] = useState('');

    let handleCoverImage = JSON.parse(localStorage.getItem('coverImage'))
    // console.log(handleCoverImage);

    let handleUploadImage = JSON.parse(localStorage.getItem('uploadImage'))
    // console.log(handleUploadImage);

    // COVER IMAGE
    useEffect(() => {
        if (handleCoverImage) {
            setCoverUpload(handleCoverImage)
        }
    }, [handleCoverImage])

    const handleImageUpload = (event) => {
        let fileImage = event.target.files[0];
        if (fileImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverUpload(reader.result);
                localStorage.setItem('coverImage', JSON.stringify(reader.result))
            };
            reader.readAsDataURL(fileImage);
        }
    };

    // PROFILE IMAGE
    useEffect(() => {
        if (handleUploadImage) {
            setUploadImage(handleUploadImage)
        }
    }, [handleUploadImage]);

    const handleImageChange = (event) => {
        let file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadImage(reader.result);
                localStorage.setItem('uploadImage', JSON.stringify(reader.result))
            };
            reader.readAsDataURL(file);
        }
    };

    const profileImage = uploadImage || user06;
    const coverImage = coverUpload || cover;

    return (
        <div className='lg:ms-[22%] p-2 mx-4 bg-white dark:text-white dark:bg-gray-800'>
            <div className='flex justify-between text-xl text-blue-700 dark:text-white py-2'>
                <div>
                    <p className='font-bold'>Profile</p>
                </div>
                <div>
                    <Link to="/layout/home">Dashboard</Link>
                    <span>/ Profile</span>
                </div>
            </div>

            {/* Profile and Cover Image */}
            <div className='relative'>
                {/* Cover */}
                <label htmlFor="cover" className="block cursor-pointer relative">
                    <img className="w-full h-[50vh] object-cover" src={coverImage} alt="Cover" />
                    <FontAwesomeIcon icon={faCamera} className="absolute right-5 bottom-5 bg-blue-700 p-2 rounded-full text-white text-2xl" />
                    <input
                        type="file"
                        id="cover"
                        // accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </label>
                {/* Profile Image */}
                <label htmlFor="avatarInput" className="absolute bottom-[-20%] mb-5 left-[50%] transform translate-x-[-50%] cursor-pointer">
                    <img className="w-40 h-40 rounded-full border-4 border-white object-cover" src={profileImage} alt="Profile" />
                    <FontAwesomeIcon icon={faCamera} className="absolute right-2 bottom-[20px] bg-blue-700 p-2 rounded-full text-white text-xl" />
                    <input
                        type="file"
                        id="avatarInput"
                        // accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>
            </div>
            <div className='text-center mt-10'>
                <p className='font-bold text-2xl'>Captain Helium</p>
                <p>UI/UX Designer</p>
            </div>
            <div className='flex justify-center'>
                <p className='border border-gray-400 p-2'><span className='font-bold'>1200 </span><span>Posts</span></p>
                <p className='border border-gray-400 p-2'><span className='font-bold'>789K </span><span>Followers</span></p>
                <p className='border border-gray-400 p-2'><span className='font-bold'>5K </span><span>Following</span></p>
            </div>
            <div className='text-center text-2xl my-2'>About Me</div>
            <p className='text-center my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nobis ad provident animi, sequi optio aperiam asperiores assumenda perferendis rem deserunt maiores totam. Et perspiciatis explicabo voluptatibus officiis atque corrupti rerum ducimus repellendus, recusandae impedit ipsam quidem architecto consequuntur, sequi eligendi! Deleniti modi vel hic consectetur, magni sint ut a repellat iure officiis iusto, ad fuga praesentium culpa! Eum assumenda, a quas veritatis cupiditate ipsa numquam voluptatem, minima fugit aperiam vitae ipsum neque asperior.</p>
            <p className='text-center my-2 text-2xl'>Follow me on</p>
            <div className='flex justify-center'>
                <tr className='gap-5 flex'>
                <td><img className='w-7 h-7 cursor-pointer bg-blue-700 p-1 rounded-full text-white' src={twitter} alt="Twitter" /></td>
                <td><img className='w-7 h-7 cursor-pointer bg-blue-700 p-1 rounded-full text-white' src={vee} alt="Vee" /></td>
                <td><img className='w-7 h-7 cursor-pointer bg-blue-700 p-1 rounded-full text-white' src={facebook} alt="Facebook" /></td>
                <td><img className='w-7 h-7 cursor-pointer bg-blue-700 p-1 rounded-full text-white' src={github} alt="Github" /></td>
                <td><img className='w-7 h-7 cursor-pointer bg-blue-700 p-1 rounded-full text-white' src={google} alt="Google" /></td>
                </tr>
            </div>
        </div>
    );
};

export default Profile;
