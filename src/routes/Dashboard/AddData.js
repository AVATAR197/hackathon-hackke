import React, {useState} from 'react'
import moment from "moment";
import Swal from 'sweetalert2'



const AddData = () => {
    const [data, setData] = useState({
        gluken: null,
        inzuline: null
    })

    const handleChange = e => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        //toto sa posle do DB spolu s udajmi
        let date = moment().format("DD-MM-YYYY hh:mm:ss")

    }

    const show = async () => 
    {
        const { value: formValues } = await Swal.fire({
            html:
                '<label>Gluken</label>' +
                '<input id="swal-input1" class="swal2-input" autocomplete="off">' +
                '<label>Inzuline</label>' +
                '<input id="swal-input2" class="swal2-input" autocomplete="off">',
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
              ]
            }
          })
          
          if (formValues) {
            setData({
                gluken: formValues[0],
                inzuline: formValues[1]
            })
          }
    }
  

    return (
        <div>
            <button onClick={show}>add</button>

            {/* <form className="" onSubmit={handleSubmit}>
                <label>
                    Gluken value:
                    <input type="number"   name="gluken" onChange={handleChange} value={data.gluken}/>
                </label>
                <label>
                    Inzulin units:
                    <input type="number" name="inzuline" onChange={handleChange} value={data.inzuline}/>
                </label>
                <button>ADD</button>
            </form> */}
        </div>
    )
}

export default AddData
