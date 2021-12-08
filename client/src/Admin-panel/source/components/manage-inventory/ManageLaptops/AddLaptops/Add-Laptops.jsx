import {React,useState} from "react";
import Navbar from "../../../header/Navbar";
import axios from '../../../../axiosInstance';
import Spinner from '../../../LoadingSpinner/LoadingSpinner';
import classes from "./AddLaptops.module.css";




const AddLaptops = (props) => {

	let [data, setData] = useState({
				title: '',
		price: '',
		quantity: '',

			brand: '' ,
			series: '',
			model: '',
			partNumber: '',
	
				color:'' ,
				
				CPU:'',
				screen:'',
				
				storage:'' ,
				
				dimentions:'' ,
				weight:'' ,
				otherFeatures:'' ,
			

				CPU_Type:'' ,
				CPU_Speed:'' ,
				NumberOfCores:'' ,
				CPU_L3_Cache:'' ,
		
				ScreenSize:'',
				TouchScreen:'' ,
				WideScreenSupport:'' ,
				DisplayType:'' ,
				resolution:'' ,
				panel:'',
				colorGamut:'' ,
				LCD_Features:'' ,
		
				OS:'' ,
			
				GPU:'' ,
				videoMemory:'' ,
				GraphicsType:'' ,
	
				SSD:'' ,
				HDD:'' ,
				Storage_Spec:'' ,
		
				memory:'',
				Memory_Spec:'' ,
				Memory_Slot_Total:'' ,
				Memory_Slot_Available:'',
			
				OpticalDrive_Type:'' ,
		
				WLAN:'' ,
				WiFi_Generation:'' ,
				bluetooth:'' ,
			
				Ports_USB:'' ,
				Ports_HDMI:'',
				Ports_AudioPorts:'' ,
	
				audio:'' ,
		
				keyboard:'' ,
				BacklitKeyboard:'' ,
				webcam:'',
		
				style:'',
				type:'' ,
				usage:'',
			
				AC_Adapter:'' ,
				battery:'' ,
	});
	let [thumbnail,setThumbnail] = useState(null);
	let [gallery,setGallery] = useState(null);
	let [loading,setLoading] = useState(false);


	console.log(data);




	let handelSubmitBtn = async ()=>{
		console.log(data);

		if(data.title===''){
			alert("Please enter data in all the given fields");
		}
		else if(data.brand===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.series===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.price===0 || data.price===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.quantity===0 || data.quantity===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.model===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.partNumber===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.color===''){
			alert("Please enter data in all the given fields");	
		}
		
		else if(data.CPU===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.screen===''){
			alert("Please enter data in all the given fields");	
		}
		
		else if(data.storage===''){
			alert("Please enter data in all the given fields");	
		}
		
		else if(data.dimentions===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.weight===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.otherFeatures===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.CPU_Type===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.CPU_Speed===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.NumberOfCores===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.CPU_L3_Cache===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.ScreenSize===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.TouchScreen===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.WideScreenSupport===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.DisplayType===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.resolution===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.panel===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.colorGamut===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.LCD_Features===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.OS===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.GPU===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.videoMemory===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.GraphicsType===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.SSD===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.Storage_Spec===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.memory===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.Memory_Spec===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.Memory_Slot_Total===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.Memory_Slot_Available===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.OpticalDrive_Type===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.WLAN===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.WiFi_Generation===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.bluetooth===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.Ports_USB===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.Ports_HDMI===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.Ports_AudioPorts===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.audio===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.keyboard===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.BacklitKeyboard===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.webcam===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.style===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.type===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.usage===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.AC_Adapter===''){
			alert("Please enter data in all the given fields");	
		}
		else if(data.battery===''){
			alert("Please enter data in all the given fields");	
		}
		else if(thumbnail===null){
			alert("Please enter data in all the given fields");	
		}
		else if(gallery===null){
			alert("Please enter data in all the given fields");	
		}
		else{

			setLoading(true);



			let formData = new FormData();
	
			
			formData.append('title', data.title);
			formData.append('price', data.price);
			formData.append('quantity', data.quantity);
			formData.append('brand', data.brand);
			formData.append('series', data.series);
			formData.append('model', data.model);
			formData.append('partNumber', data.partNumber);
			formData.append('color', data.color);			
			formData.append('CPU', data.CPU);
			formData.append('screen', data.screen);			
			formData.append('storage', data.storage);			
			formData.append('dimentions', data.dimentions);
			formData.append('weight', data.weight);
			formData.append('otherFeatures', data.otherFeatures);
			formData.append('CPU_Type', data.CPU_Type);
			formData.append('CPU_Speed', data.CPU_Speed);
			formData.append('NumberOfCores', data.NumberOfCores);
			formData.append('CPU_L3_Cache', data.CPU_L3_Cache);
			formData.append('ScreenSize', data.ScreenSize);
			formData.append('TouchScreen', data.TouchScreen);
			formData.append('WideScreenSupport', data.WideScreenSupport);
			formData.append('DisplayType', data.DisplayType);
			formData.append('resolution', data.resolution);
			formData.append('panel', data.panel);
			formData.append('colorGamut', data.colorGamut);
			formData.append('LCD_Features', data.LCD_Features);
			formData.append('OS', data.OS);
			formData.append('GPU', data.GPU);
			formData.append('videoMemory', data.videoMemory);
			formData.append('GraphicsType', data.GraphicsType);
			formData.append('SSD', data.SSD);
			formData.append('HDD', data.HDD);
			formData.append('Storage_Spec', data.Storage_Spec);
			formData.append('memory', data.memory);
			formData.append('Memory_Spec', data.Memory_Spec);
			formData.append('Memory_Slot_Total', data.Memory_Slot_Total);
			formData.append('Memory_Slot_Available', data.Memory_Slot_Available);
			formData.append('OpticalDrive_Type', data.OpticalDrive_Type);
			formData.append('WLAN', data.WLAN);
			formData.append('WiFi_Generation', data.WiFi_Generation);
			formData.append('bluetooth', data.bluetooth);
			formData.append('Ports_USB', data.Ports_USB);
			formData.append('Ports_HDMI', data.Ports_HDMI);
			formData.append('Ports_AudioPorts', data.Ports_AudioPorts);
			formData.append('audio', data.audio);
			formData.append('keyboard', data.keyboard);
			formData.append('BacklitKeyboard', data.BacklitKeyboard);
			formData.append('webcam', data.webcam);
			formData.append('style', data.style);
			formData.append('type', data.type);
			formData.append('usage', data.usage);
			formData.append('AC_Adapter', data.AC_Adapter);
			formData.append('battery', data.battery);
			
			
			formData.append('thumbnail', thumbnail);
	
	
			if(gallery){
				for(let i=0; i<gallery.length; i++){
					formData.append('gallery', gallery[i]);
				}
		
			}
			
	
			await axios.post('laptops' , formData)
			.then(res=>{
				console.log('product Added successfully');
				setLoading(false);
				props.history.replace('/admin-panel/managelaptops');
			})
			.catch(err=>{
				console.log(err);
				setLoading(false);
			})
	
	



		}

	}






	let form = <Spinner/>;

	if(!loading){

		form = (
			<div>
				<Navbar />
				<div className={classes.main}>
					<div className={classes.inputform}>
						<h1 className={classes.h1}>Add Laptops</h1>
						<form className={classes.form}   method="post" encType="multipart/form-data" >
							<div className={classes.form2}>
								<div className={classes.row}>
									<label className={classes.label} htmlFor="title">
										Title:
									</label>
									<br />
									<label className={classes.label} htmlFor="price">
										Price:
									</label>
									<br />
									<label className={classes.label} htmlFor="brand">
										Brand:
									</label>
									<br />
									<label className={classes.label} htmlFor="series">
										series:
									</label>
									<br />
									<label className={classes.label} htmlFor="model">
										Model:
									</label>
									<br />
									<label className={classes.label} htmlFor="partnumber">
										Part No:
									</label>
									<br />
									<label className={classes.label} htmlFor="color">
										Color:
									</label>
									<br />
									
									<label className={classes.label} htmlFor="cpu">
										CPU:
									</label>
									<br />
									<label className={classes.label} htmlFor="screen">
										Screen:
									</label>
									<br />
									
									<label className={classes.label} htmlFor="storage">
										Storage:
									</label>
									<br />
									<label className={classes.label} htmlFor="dimentions">
										Dimentions:
									</label>
									<br />
									<label className={classes.label} htmlFor="weight">
										Weight:
									</label>
									<br />
									<label className={classes.label} htmlFor="otherfeatures">
										Other Features:
									</label>
									<br />
									<label className={classes.label} htmlFor="cputype">
										CPU Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="cpuspeed">
										CPU Speed:
									</label>
									<br />
									<label className={classes.label} htmlFor="numberofcores">
										Number of Cores:
									</label>
									<br />
									<label className={classes.label} htmlFor="cpul3cache">
										CPU_L3_Cache:
									</label>
									<br />
									<label className={classes.label} htmlFor="screensize">
										Screen Size:
									</label>
									<br />
									<label className={classes.label} htmlFor="touchscreen">
										Touch Screen:
									</label>
									<br />
									<label className={classes.label} htmlFor="widescreensupport">
										WideScreen:
									</label>
									<br />
									<label className={classes.label} htmlFor="displaytype">
										Display Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="resolution">
										Resolution:
									</label>
									<br />
									<label className={classes.label} htmlFor="panel">
										Panel:
									</label>
									<br />
									<label className={classes.label} htmlFor="colorgamut">
										Color Gamut:
									</label>
									<br />
									<label className={classes.label} htmlFor="lcdfeatures">
										LCD Features:
									</label>
									<br />
									<label className={classes.label} htmlFor="os">
										OS:
									</label>
									<br />
									<label className={classes.label} htmlFor="thumbnail">
										Thumbnail:
									</label>									
								</div>
								<div className={classes.row}>
									<input
										className={classes.input}
										type="text"
										id="title"
										name="title"
										placeholder="Enter Title"
										required
										onChange={e=>{
											setData({...data,title:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="number"
										id="price"
										name="price"
										placeholder="Enter Price"
										required
										onChange={e=>{
											let price = e.target.value;
											if(price<0){
												alert('Price Cannot be a Negative number');
											}
											else if(price>=0){
												setData({...data,price:e.target.value});
											}
											
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="brand"
										name="brand"
										placeholder="Enter Brand"
										required
										onChange={e=>{
											setData({...data,brand:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="series"
										name="series"
										placeholder="Enter Series"
										required
										onChange={e=>{
											setData({...data,series:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="model"
										name="model"
										placeholder="Enter Model"
										required
										onChange={e=>{
											setData({...data,model:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="partnumber"
										name="partnumber"
										placeholder="Enter Part Number"
										required
										onChange={e=>{
											setData({...data,partNumber:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="color"
										name="color"
										placeholder="Enter Color"
										required
										onChange={e=>{
											setData({...data,color:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="cpu"
										name="cpu"
										placeholder="Enter CPU"
										required
										onChange={e=>{
											setData({...data,CPU:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="screen"
										name="screen"
										placeholder="Enter Screen"
										required
										onChange={e=>{
											setData({...data,screen:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="storage"
										name="storage"
										placeholder="Enter Storage"
										required
										onChange={e=>{
											setData({...data,storage:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="dimentions"
										name="dimentions"
										placeholder="Enter Dimentions"
										required
										onChange={e=>{
											setData({...data,dimentions:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="weight"
										name="weight"
										placeholder="Enter Weight"
										required
										onChange={e=>{
											setData({...data,weight:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="otherfeatures"
										name="otherfeatures"
										placeholder="Enter Other Features"
										required
										onChange={e=>{
											setData({...data,otherFeatures:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="cputype"
										name="cputype"
										placeholder="Enter CPU Type"
										required
										onChange={e=>{
											setData({...data,CPU_Type:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="cpuspeed"
										name="cpuspeed"
										placeholder="Enter CPU Speed"
										required
										onChange={e=>{
											setData({...data,CPU_Speed:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="numberofcores"
										name="numberofcores"
										placeholder="Enter Number Of Cores"
										required
										onChange={e=>{
											setData({...data,NumberOfCores:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="cpul3cache"
										name="cpul3cache"
										placeholder="Enter CPU L3 Cache"
										required
										onChange={e=>{
											setData({...data,CPU_L3_Cache:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="screensize"
										name="screensize"
										placeholder="Enter Screen Size"
										required
										onChange={e=>{
											setData({...data,ScreenSize:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="touchscreen"
										name="touchscreen"
										placeholder="Enter Touch Screen"
										required
										onChange={e=>{
											setData({...data,TouchScreen:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="widescreensupport"
										name="widescreensupport"
										placeholder="Enter WideScreen"
										required
										onChange={e=>{
											setData({...data,WideScreenSupport:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="displaytype"
										name="displaytype"
										placeholder="Enter Display Type"
										required
										onChange={e=>{
											setData({...data,DisplayType:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="resolution"
										name="resolution"
										placeholder="Enter Resolution"
										required
										onChange={e=>{
											setData({...data,resolution:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="panel"
										name="panel"
										placeholder="Enter Panel"
										required
										onChange={e=>{
											setData({...data,panel:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="colorgamut"
										name="colorgamut"
										placeholder="Enter Color Gamut"
										required
										onChange={e=>{
											setData({...data,colorGamut:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="lcdfeatures"
										name="lcdfeatures"
										placeholder="Enter LCD Features"
										required
										onChange={e=>{
											setData({...data,LCD_Features:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="os"
										name="os"
										placeholder="Enter OS"
										required
										onChange={e=>{
											setData({...data,OS:e.target.value});
										}}
									/>
									<br />
									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
											type="file"
											id="thumbnail"
											name="thumbnail"
											required
											onChange = { e=>{
												setThumbnail(e.target.files[0]);
											} }
										/>
										<i className="fa fa-cloud-upload"></i> Select File
									</label>
								</div>
								<div className={classes.row}>
									<label className={classes.label} htmlFor="Quantity">
										Quantity:
									</label>
									<br />									
									<label className={classes.label} htmlFor="GPU">
										GPU:
									</label>
									<br />
									<label className={classes.label} htmlFor="videomemory">
										Video Memory:
									</label>
									<br />
									<label className={classes.label} htmlFor="graphicstype">
										Graphics Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="ssd">
										SSD:
									</label>
									<br />
									<label className={classes.label} htmlFor="hdd">
										HDD:
									</label>
									<br />
									<label className={classes.label} htmlFor="storagespec">
										Storage Spec:
									</label>
									<br />
									<label className={classes.label} htmlFor="memory">
										Memory:
									</label>
									<br />
									<label className={classes.label} htmlFor="memoryspec">
										Memory Spec:
									</label>
									<br />
									<label className={classes.label} htmlFor="memoryslottotal">
										Memory Slot Total:
									</label>
									<br />
									<label className={classes.label} htmlFor="memoryslotavailable">
										Memory Slot Available:
									</label>
									<br />
									<label className={classes.label} htmlFor="opticaldrivetype">
										Optical Drive Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="wlan">
										WLAN:
									</label>
									<br />
									<label className={classes.label} htmlFor="wifigeneration">
										Wifi Generation:
									</label>
									<br />
									<label className={classes.label} htmlFor="bluetooth">
										Bluetooth:
									</label>
									<br />
									<label className={classes.label} htmlFor="portsusb">
										USB Ports:
									</label>
									<br />
									<label className={classes.label} htmlFor="portshdmi">
										HDMI Ports:
									</label>
									<br />
									<label className={classes.label} htmlFor="audioports">
										Audio Ports:
									</label>
									<br />
									<label className={classes.label} htmlFor="audio">
										Audio:
									</label>
									<br />
									<label className={classes.label} htmlFor="keyboard">
										Keyboard:
									</label>
									<br />
									<label className={classes.label} htmlFor="backlitkeyboard">
										BackLit Keyboard:
									</label>
									<br />
									<label className={classes.label} htmlFor="webcam">
										Webcam:
									</label>
									<br />
									<label className={classes.label} htmlFor="style">
										Style:
									</label>
									<br />
									<label className={classes.label} htmlFor="type">
										Type:
									</label>
									<br />
									<label className={classes.label} htmlFor="usage">
										Usage:
									</label>
									<br />
									<label className={classes.label} htmlFor="acadapter">
										AC Adapter:
									</label>
									<br />
									<label className={classes.label} htmlFor="battery">
										Battery:
									</label>
									<br />
									<label className={classes.label} htmlFor="gallery">
										Gallery:
									</label>
								</div>
								<div className={classes.row}>
								<input
										className={classes.input}
										type="number"
										id="quantity"
										name="quantity"
										placeholder="Enter Quantity"
										required
										onChange={e=>{
											let quantity = e.target.value;
											if(quantity<0){
												alert('Quantity Cannot be a Negative number');
											}
											else if(quantity>=0){
												setData({...data,quantity:e.target.value});
											}
											
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="gpu"
										name="gpu"
										placeholder="Enter GPU"
										required
										onChange={e=>{
											setData({...data,GPU:e.target.value});
										}}
									/>
									<br />							
									<input
										className={classes.input}
										type="text"
										id="videomemory"
										name="videomemory"
										placeholder="Enter Video Memory"
										required
										onChange={e=>{
											setData({...data,videoMemory:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="graphicstype"
										name="graphicstype"
										placeholder="Enter Graphics Type"
										required
										onChange={e=>{
											setData({...data,GraphicsType:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="ssd"
										name="ssd"
										placeholder="Enter SSD"
										required
										onChange={e=>{
											setData({...data,SSD:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="hdd"
										name="hdd"
										placeholder="Enter HDD"
										required
										onChange={e=>{
											setData({...data,HDD:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="storagespec"
										name="storagespec"
										placeholder="Enter Storage Spec"
										required
										onChange={e=>{
											setData({...data,Storage_Spec:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="memory"
										name="memory"
										placeholder="Enter Memory"
										required
										onChange={e=>{
											setData({...data,memory:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="memoryspec"
										name="memoryspec"
										placeholder="Enter Memory Spec"
										required
										onChange={e=>{
											setData({...data,Memory_Spec:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="memoryslottotal"
										name="memoryslottotal"
										placeholder="Enter Memory Slot Total"
										required
										onChange={e=>{
											setData({...data,Memory_Slot_Total:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="memoryslotavailable"
										name="memoryslotavailable"
										placeholder="Enter Memory Slot Available"
										required
										onChange={e=>{
											setData({...data,Memory_Slot_Available:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="opticaldrivetype"
										name="opticaldrivetype"
										placeholder="Enter Optical Drive Type"
										required
										onChange={e=>{
											setData({...data,OpticalDrive_Type:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="wlan"
										name="wlan"
										placeholder="Enter WLAN"
										required
										onChange={e=>{
											setData({...data,WLAN:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="wifigeneration"
										name="wifigeneration"
										placeholder="Enter Wifi Generation"
										required
										onChange={e=>{
											setData({...data,WiFi_Generation:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="bluetooth"
										name="bluetooth"
										placeholder="Enter Bluetooth"
										required
										onChange={e=>{
											setData({...data,bluetooth:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="portsusb"
										name="portsusb"
										placeholder="Enter USB Ports"
										required
										onChange={e=>{
											setData({...data,Ports_USB:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="portshdmi"
										name="portshdmi"
										placeholder="Enter HDMI Ports"
										required
										onChange={e=>{
											setData({...data,Ports_HDMI:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="audioports"
										name="audioports"
										placeholder="Enter Audio Ports"
										required
										onChange={e=>{
											setData({...data,Ports_AudioPorts:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="audio"
										name="audio"
										placeholder="Enter Audio"
										required
										onChange={e=>{
											setData({...data,audio:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="keyboard"
										name="keyboard"
										placeholder="Enter Keyboard"
										required
										onChange={e=>{
											setData({...data,keyboard:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="backlitkeyboard"
										name="backlitkeyboard"
										placeholder="Enter Backlit Keyboard"
										required
										onChange={e=>{
											setData({...data,BacklitKeyboard:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="webcam"
										name="webcam"
										placeholder="Enter Webcam"
										required
										onChange={e=>{
											setData({...data,webcam:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="style"
										name="style"
										placeholder="Enter Style"
										required
										onChange={e=>{
											setData({...data,style:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="type"
										name="type"
										placeholder="Enter Type"
										required
										onChange={e=>{
											setData({...data,type:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="usage"
										name="usage"
										placeholder="Enter Usage"
										required
										onChange={e=>{
											setData({...data,usage:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="acadapter"
										name="acadapter"
										placeholder="Enter AC Adapter"
										required
										onChange={e=>{
											setData({...data,AC_Adapter:e.target.value});
										}}
									/>
									<br />
									<input
										className={classes.input}
										type="text"
										id="battery"
										name="battery"
										placeholder="Enter Battery"
										required
										onChange={e=>{
											setData({...data,battery:e.target.value});
										}}
									/>
									<br />
									<label className={classes.customfile}>
										<input
											className={classes.inputfile}
											type="file"
											id="gallery"
											name="gallery"
											required
											multiple
											onChange={
												e=>{
													let gal = e.target.files;
													if(gal.length > 6){
														alert("You can only upload maximum of 6 files in gallery");
													}
													else{
														setGallery(gal);
													}
													
											}}
										/>
										<i className="fa fa-cloud-upload"></i> Select Files
									</label>
								</div>
							</div>
							
						</form>
						<div className={classes.btnDiv}>
					<input className={classes.btn} type="submit" value="Submit" onClick={handelSubmitBtn} />
					</div>
					</div>
					
				</div>
			</div>
		);

	}





	return (<div>
		{form}
	</div>) 
};

export default AddLaptops;
