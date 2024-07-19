import React from 'react'
import google from '../assets/image/google.svg'
import twitter from '../assets/image/twitter.svg'
import github from '../assets/image/github.svg'
import vee from '../assets/image/vee.svg'
import facebook from '../assets/image/facebook.svg'


const Revenue = () => {
    return (
        <div>
            <table>
                <tbody className=" divide-y divide-gray-600 dark:divide-white text-xl">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><img src={vee} alt="" /></td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">5.5K</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-600">$6,768</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">780</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <td className="text-blue-600 hover:text-blue-900">9.8%</td>
                        </td>
                        <td className="text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><img src={twitter} alt="" /></td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">5.5K</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-600">$9,768</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">690</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <td className="text-blue-600 hover:text-blue-900">9.8%</td>
                        </td>
                        <td className="text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><img src={google} alt="" /></td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">3.5K</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-600">$5,768</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">590</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <td className="text-blue-600 hover:text-blue-900">4.8%</td>
                        </td>
                        <td className="text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><img src={github} alt="" /></td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">4.5K</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-600">$4,768</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">550</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <td className="text-blue-600 hover:text-blue-900">3.8%</td>
                        </td>
                        <td className="text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>



                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap"><img src={facebook} alt="" /></td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">2.5K</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-600">$4,768</td>
                        <td className="px-6 py-4 whitespace-nowrap dark:text-white">890</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <td className="text-blue-600 hover:text-blue-900">9.8%</td>
                        </td>
                        <td className="text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Revenue