import {React,useState} from "react";
import classes from "./AddPreBuilt.module.css";
import Navbar from "../../../header/Navbar";
import axios from '../../../../axiosInstance';
import Spinner from '../../../LoadingSpinner/LoadingSpinner';





const AddPreBuilt = (props) => {

	let [data, setData] = useState({
		title: '' ,
        price:'',
        quantity: '',
        brand:'',
        series:'',
        model: '',
            type:'',
            formFactor:'',
            usage: '',
            processor:'',
            processorMainFeatures:'',
            cachePerProcessor:'',
            memory:'',
            storage: '',
            graphics: '',
            powerSupply: '',
            case:'',
            coolingsystem: '',
            operatingSystem: '',
            windows: '',
            MotherBoard_Chipset: '',
            MotherBoard_Name: '',
            CPU_Type: '',
            CPU_Speed: '',
            L3_Cache_Per_CPU: '',
            CPU_MainFeatures: '',
            GPU_Type: '',
            VideoMemory: '',
            VR_Ready: '',
            Memory_Capacity:'',
            Memory_Speed:'',
            Memory_Spec:'',
            SSD: '',
            HDD: '',
            OpticalDrive_Type: '',
            LAN_Speed: '',
            WLAN:'',
            WIFI_Generation: '',
            FrontPanel_Front_USB: '',
            FrontPanel_FrontAudioPorts: '',
            BackPanel_PS_2: '',
            BackPanel_VideoPort: '',
            BackPanel_Rear_USB: '',
            BackPanel_Rj45: '',
            BackPanel_RearAudioPorts: '',
            BackPanel_SP_DIF: '',
	});
	let [thumbnail,setThumbnail] = useState(null);
	let [gallery,setGallery] = useState(null);
	let [loading,setLoading] = useState(false);



	let handelSubmitBtn = async ()=>{
		console.log(data);

		if(data.title===''){
			alert("Please enter data in all the given fields  (title)");
		}
		else if(data.price===0 || data.price===''){
			alert("Please enter data in all the given fields  (price)");	
		}
		else if(data.quantity===0 || data.quantity===''){
			alert("Please enter data in all the given fields  (quantity)");	
		}
		else if(data.brand===''){
			alert("Please enter data in all the given fields  (brand)");	
		}
		else if(data.series===''){
			alert("Please enter data in all the given fields  (series)");	
		}
		else if(data.model===''){
			alert("Please enter data in all the given fields  (model)");	
		}
		else if(data.type===''){
			alert("Please enter data in all the given fields  (type)");	
		}
		else if(data.formFactor===''){
			alert("Please enter data in all the given fields  (formFactor)");	
		}
		else if(data.usage===''){
			alert("Please enter data in all the given fields  (usage)");	
		}
		else if(data.processor===''){
			alert("Please enter data in all the given fields  (processor)");	
		}
		else if(data.processorMainFeatures===''){
			alert("Please enter data in all the given fields  (processorMainFeatures)");	
		}
		else if(data.cachePerProcessor===''){
			alert("Please enter data in all the given fields  (cachePerProcessor)");	
		}
		else if(data.memory===''){
			alert("Please enter data in all the given fields  (memory)");	
		}
		else if(data.storage===''){
			alert("Please enter data in all the given fields  (storage)");	
		}
		else if(data.graphics===''){
			alert("Please enter data in all the given fields  (graphics)");	
		}
		else if(data.powerSupply===''){
			alert("Please enter data in all the given fields  (powerSupply)");	
		}
		else if(data.case===''){
			alert("Please enter data in all the given fields  (case)");	
		}
		else if(data.coolingsystem===''){
			alert("Please enter data in all the given fields  (coolingsystem)");	
		}
		else if(data.operatingSystem===''){
			alert("Please enter data in all the given fields  (operatingSystem)");	
		}
		else if(data.windows===''){
			alert("Please enter data in all the given fields  (windows)");	
		}
		else if(data.MotherBoard_Chipset===''){
			alert("Please enter data in all the given fields  (MotherBoard_Chipset)");	
		}
		else if(data.MotherBoard_Name===''){
			alert("Please enter data in all the given fields  (MotherBoard_Name)");	
		}
		else if(data.CPU_Type===''){
			alert("Please enter data in all the given fields  (CPU_Type)");	
		}
		else if(data.CPU_Speed===''){
			alert("Please enter data in all the given fields  (CPU_Speed) ");	
		}
		else if(data.L3_Cache_Per_CPU===''){
			alert("Please enter data in all the given fields  (L3_Cache_Per_CPU)");	
		}
		else if(data.CPU_MainFeatures===''){
			alert("Please enter data in all the given fields  (CPU_MainFeatures)");	
		}
		else if(data.GPU_Type===''){
			alert("Please enter data in all the given fields  (GPU_Type)");	
		}
		else if(data.VideoMemory===''){
			alert("Please enter data in all the given fields  (VideoMemory)");	
		}
		else if(data.VR_Ready===''){
			alert("Please enter data in all the given fields  (VR_Ready)");	
		}
		else if(data.Memory_Capacity===''){
			alert("Please enter data in all the given fields  (Memory_Capacity)");	
		}
		else if(data.Memory_Speed===''){
			alert("Please enter data in all the given fields  (Memory_Speed)");	
		}
		else if(data.Memory_Spec===''){
			alert("Please enter data in all the given fields  (Memory_Spec)");	
		}
		else if(data.SSD===''){
			alert("Please enter data in all the given fields   (SSD)");	
		}
		else if(data.HDD===''){
			alert("Please enter data in all the given fields  (HDD)");	
		}
		else if(data.OpticalDrive_Type===''){
			alert("Please enter data in all the given fields  (OpticalDrive_Type)");	
		}
		else if(data.LAN_Speed===''){
			alert("Please enter data in all the given fields  (LAN_Speed)");	
		}
		else if(data.WLAN===''){
			alert("Please enter data in all the given fields  (WLAN)");	
		}
		else if(data.WIFI_Generation===''){
			alert("Please enter data in all the given fields  (WIFI_Generation)");	
		}
		else if(data.FrontPanel_Front_USB===''){
			alert("Please enter data in all the given fields  (FrontPanel_Front_USB)");	
		}
		else if(data.FrontPanel_FrontAudioPorts===''){
			alert("Please enter data in all the given fields  (FrontPanel_FrontAudioPorts)");	
		}
		else if(data.Memory_Speed===''){
			alert("Please enter data in all the given fields  (Memory_Speed)");	
		}
		else if(data.BackPanel_PS_2===''){
			alert("Please enter data in all the given fields  (BackPanel_PS_2)");	
		}
		else if(data.BackPanel_VideoPort===''){
			alert("Please enter data in all the given fields  (BackPanel_VideoPort)");	
		}
		else if(data.BackPanel_Rear_USB===''){
			alert("Please enter data in all the given fields (BackPanel_Rear_USB)");	
		}
		else if(data.BackPanel_Rj45==='' || data.BackPanel_Rj45===0){
			alert("Please enter data in all the given fields (BackPanel_Rj45)");	
		}
		else if(data.BackPanel_RearAudioPorts===0 || data.BackPanel_RearAudioPorts===''){
			alert("Please enter data in all the given fields (BackPanel_RearAudioPorts)");	
		}
		else if(data.BackPanel_SP_DIF==='' || data.BackPanel_SP_DIF===0){
			alert("Please enter data in all the given fields (BackPanel_SP_DIF)");	
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
	
	
	
			console.log(thumbnail);
			console.log(gallery);
	
			
			formData.append('title', data.title);
			formData.append('price', data.price);
			formData.append('quantity', data.quantity);
			formData.append('brand', data.brand);
			formData.append('series', data.series);
			formData.append('model', data.model);
			formData.append('type', data.type);
			formData.append('formFactor', data.formFactor);
			formData.append('usage', data.usage);
			formData.append('processor', data.processor);
			formData.append('processorMainFeatures', data.processorMainFeatures);
			formData.append('cachePerProcessor', data.cachePerProcessor);
			formData.append('memory', data.memory);
			formData.append('storage', data.storage);
			formData.append('graphics', data.graphics);
			formData.append('powerSupply', data.powerSupply);
			formData.append('case', data.case);
			formData.append('coolingsystem', data.coolingsystem);
			formData.append('operatingSystem', data.operatingSystem);
			formData.append('windows', data.windows);
			formData.append('MotherBoard_Chipset', data.MotherBoard_Chipset);
			formData.append('MotherBoard_Name', data.MotherBoard_Name);

			formData.append('CPU_Type', data.CPU_Type);
			formData.append('CPU_Speed', data.CPU_Speed);
			formData.append('L3_Cache_Per_CPU', data.L3_Cache_Per_CPU);
			formData.append('CPU_MainFeatures', data.CPU_MainFeatures);
			formData.append('GPU_Type', data.GPU_Type);
			formData.append('VideoMemory', data.VideoMemory);
			formData.append('VR_Ready', data.VR_Ready);
			formData.append('Memory_Capacity', data.Memory_Capacity);
			formData.append('Memory_Speed', data.Memory_Speed);
			formData.append('Memory_Spec', data.Memory_Spec);
			formData.append('SSD', data.SSD);
			formData.append('HDD', data.HDD);
			formData.append('OpticalDrive_Type', data.OpticalDrive_Type);
			formData.append('LAN_Speed', data.LAN_Speed);
			formData.append('WLAN', data.WLAN);
			formData.append('WIFI_Generation', data.WIFI_Generation);
			formData.append('FrontPanel_Front_USB', data.FrontPanel_Front_USB);
			formData.append('FrontPanel_FrontAudioPorts', data.FrontPanel_FrontAudioPorts);
			formData.append('BackPanel_PS_2', data.BackPanel_PS_2);
			formData.append('BackPanel_Rear_USB', data.BackPanel_Rear_USB);
			formData.append('BackPanel_RearAudioPorts', data.BackPanel_RearAudioPorts);
			formData.append('BackPanel_Rj45', data.BackPanel_Rj45);
			formData.append('BackPanel_SP_DIF', data.BackPanel_SP_DIF);
			formData.append('BackPanel_VideoPort', data.BackPanel_VideoPort);
			
			formData.append('thumbnail', thumbnail);
	
	
			if(gallery){
				for(let i=0; i<gallery.length; i++){
					formData.append('gallery', gallery[i]);
				}
		
			}
			
	
			await axios.post('preBuiltDesktop' , formData)
			.then(res=>{
				console.log('product Added successfully');
				setLoading(false);
				props.history.replace('/admin-panel/manageprebuilt');
			})
			.catch(err=>{
				console.log(err);
				setLoading(false);
			})
	
	



		}

	}




	let form = <Spinner/>;

	if(!loading){

		form= (<div>
			<Navbar />
			<div className={classes.main}>
				<div className={classes.inputform}>
					<h1 className={classes.h1}>Add PreBuilt</h1>
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
								<label className={classes.label} htmlFor="quantity">
									Quantity:
								</label>
								<br />
								<label className={classes.label} htmlFor="brand">
									Brand:
								</label>
								<br />
								<label className={classes.label} htmlFor="series">
									Series:
								</label>
								<br />
								<label className={classes.label} htmlFor="model">
									Model:
								</label>
								<br />
								<label className={classes.label} htmlFor="type">
									Type:
								</label>
								<br />
								<label className={classes.label} htmlFor="formFactor">
									FormFactor:
								</label>
								<br />
								<label className={classes.label} htmlFor="usage">
									Usage:
								</label>
								<br />
								<label className={classes.label} htmlFor="processor">
									Processor:
								</label>
								<br />
								<label className={classes.label} htmlFor="processorMainFeatures">
								Processor Main Features:
								</label>
								<br />
								<label className={classes.label} htmlFor="cachePerProcessor">
								Cache Per Processor:
								</label>
								<br />
								<label className={classes.label} htmlFor="memory">
								Memory:
								</label>
								<br />
								<label className={classes.label} htmlFor="storage">
								Storage:
								</label>
								<br />
								<label className={classes.label} htmlFor="graphics">
								Graphics:
								</label>
								<br />
								<label className={classes.label} htmlFor="powerSupply">
								Power Supply:
								</label>
								<br />
								<label className={classes.label} htmlFor="case">
								Case:
								</label>
								<br />
								<label className={classes.label} htmlFor="coolingSystem">
								Cooling System:
								</label>
								<br />
								<label className={classes.label} htmlFor="operatingSystem">
								Operating System:
								</label>
								<br />
								<label className={classes.label} htmlFor="windows">
								Windows:
								</label>
								<br />
								<label className={classes.label} htmlFor="MotherBoard_Chipset">
								MotherBoard Chipset:
								</label>
								<br />
								<label className={classes.label} htmlFor="MotherBoard_Name">
								MotherBoard Name:
								</label>
								<br />
								<label className={classes.label} htmlFor="BackPanel_VideoPort">
								BackPanel VideoPort:
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
									placeholder="Enter model"
									required
									onChange={e=>{
										setData({...data,model:e.target.value});
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
									id="formfactor"
									name="formfactor"
									placeholder="Enter FormFactor"
									required
									onChange={e=>{
										setData({...data,formFactor:e.target.value});
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
									id="processor"
									name="processor"
									placeholder="Enter Processor"
									required
									onChange={e=>{
										setData({...data,processor:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="processor_main_features"
									name="processor_main_features"
									placeholder="Enter Processor Main Features"
									required
									onChange={e=>{
										setData({...data,processorMainFeatures:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="cache_per_processor"
									name="cache_per_processor"
									placeholder="Enter Cache Per Processor"
									required
									onChange={e=>{
										setData({...data,cachePerProcessor:e.target.value});
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
									id="graphics"
									name="graphics"
									placeholder="Enter Graphics"
									required
									onChange={e=>{
										setData({...data,graphics:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="power_supply"
									name="power_supply"
									placeholder="Enter Power Supply"
									required
									onChange={e=>{
										setData({...data,powerSupply:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="case"
									name="case"
									placeholder="Enter Case"
									required
									onChange={e=>{
										setData({...data,case:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="coolingSystem"
									name="coolingSystem"
									placeholder="Enter Cooling System"
									required
									onChange={e=>{
										setData({...data,coolingsystem:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="operatingSystem"
									name="operatingSystem"
									placeholder="Enter Operating System"
									required
									onChange={e=>{
										setData({...data,operatingSystem:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="windows"
									name="windows"
									placeholder="Enter Windows"
									required
									onChange={e=>{
										setData({...data,windows:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="motherboard_chipset"
									name="motherboard_chipset"
									placeholder="Enter Motherboard Chipset"
									required
									onChange={e=>{
										setData({...data,MotherBoard_Chipset:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="motherboard_name"
									name="motherboard_name"
									placeholder="Enter Motherboard Name"
									required
									onChange={e=>{
										setData({...data,MotherBoard_Name:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="VideoPort"
									name="VideoPort"
									placeholder="Enter VideoPort"
									required
									onChange={e=>{
										setData({...data,BackPanel_VideoPort:e.target.value});
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
								<label className={classes.label} htmlFor="CPU_Type">
								CPU Type:
								</label>
								<br />
								<label className={classes.label} htmlFor="CPU_Speed">
								CPU_Speed:
								</label>
								<br />
								<label className={classes.label} htmlFor="L3_Cache_Per_CPU">
								L3 Cache Per CPU:
								</label>
								<br />
								<label className={classes.label} htmlFor="CPU_MainFeatures">
								CPU Main Features:
								</label>
								<br />
								<label className={classes.label} htmlFor="GPU_Type">
								GPU Type:
								</label>
								<br />
								<label className={classes.label} htmlFor="video_memory">
									Video Memory:
								</label>
								<br />
								<label className={classes.label} htmlFor="VR_ready">
									VR Ready:
								</label>
								<br />
								<label className={classes.label} htmlFor="Memory_Capacity">
								Memory Capacity:
								</label>
								<br />
								<label className={classes.label} htmlFor="Memory_Speed">
								Memory Speed:
								</label>
								<br />
								<label className={classes.label} htmlFor="Memory_Spec">
								Memory Spec:
								</label>
								<br />
								<label className={classes.label} htmlFor="SSD">
								SSD:
								</label>
								<br />
								<label className={classes.label} htmlFor="HDD">
								HDD:
								</label>
								<br />
								<label className={classes.label} htmlFor="OpticalDrive_Type">
								OpticalDrive Type:
								</label>
								<br />
								<label className={classes.label} htmlFor="LAN_Speed">
								LAN Speed:
								</label>
								<br />
								<label className={classes.label} htmlFor="WLAN">
								WLAN:
								</label>
								<br />
								<label className={classes.label} htmlFor="WIFI_Generation">
								WIFI Generation:
								</label>
								<br />
								<label className={classes.label} htmlFor="FrontPanel_Front_USB">
								Front USB:
								</label>
								<br />
								<label className={classes.label} htmlFor="FrontPanel_FrontAudioPorts">
								Front Audio Ports:
								</label>
								<br />
								<label className={classes.label} htmlFor="BackPanel_PS_2">
								BackPanel PS2:
								</label>
								<br />
								<label className={classes.label} htmlFor="BackPanel_Rear_USB">
							Rear USB:
								</label>
								<br />
								<label className={classes.label} htmlFor="BackPanel_RearAudioPorts">
								Rear Audio Ports:
								</label>
								<br />
								<label className={classes.label} htmlFor="BackPanel_Rj45">
								Rj45:
								</label>
								<br />
								<label className={classes.label} htmlFor="BackPanel_SP_DIF">
								BackPanel SP DIF:
								</label>
								<br />
								
								<label className={classes.label} htmlFor="gallery">
									Gallery:
								</label>
							</div>
							<div className={classes.row}>
								<input
									className={classes.input}
									type="text"
									id="CPU_Type"
									name="CPU_Type"
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
									id="CPU_Speed"
									name="CPU_Speed"
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
									id="L3_Cache_Per_CPU"
									name="L3_Cache_Per_CPU"
									placeholder="Enter L3 Cache Per CPU"
									required
									onChange={e=>{
										setData({...data,L3_Cache_Per_CPU:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="CPU_MainFeatures"
									name="CPU_MainFeatures"
									placeholder="Enter CPU MainFeatures"
									required
									onChange={e=>{
										setData({...data,CPU_MainFeatures:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="GPU_Type"
									name="GPU_Type"
									placeholder="Enter GPU Type"
									required
									onChange={e=>{
										setData({...data,GPU_Type:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="VideoMemory"
									name="VideoMemory"
									placeholder="Enter Video Memory"
									required
									onChange={e=>{
										setData({...data,VideoMemory:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="VR_Ready"
									name="VR_Ready"
									placeholder="Enter VR Ready"
									required
									onChange={e=>{
										setData({...data,VR_Ready:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="Memory_Capacity"
									name="Memory_Capacity"
									placeholder="Enter Memory Capacity"
									required
									onChange={e=>{
										setData({...data,Memory_Capacity:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="Memory_Speed"
									name="Memory_Speed"
									placeholder="Enter Memory Speed"
									required
									onChange={e=>{
										setData({...data,Memory_Speed:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="Memory_Spec"
									name="Memory_Spec"
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
									id="SSD"
									name="SSD"
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
									id="HDD"
									name="HDD"
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
									id="OpticalDrive_Type"
									name="OpticalDrive_Type"
									placeholder="Enter OpticalDrive Type"
									required
									onChange={e=>{
										setData({...data,OpticalDrive_Type:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="LAN_Speed"
									name="LAN_Speed"
									placeholder="Enter LAN Speed"
									required
									onChange={e=>{
										setData({...data,LAN_Speed:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="WLAN"
									name="WLAN"
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
									id="WIFI_Generation"
									name="WIFI_Generation"
									placeholder="Enter WIFI Generation"
									required
									onChange={e=>{
										setData({...data,WIFI_Generation:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="Front_USB"
									name="Front_USB"
									placeholder="Enter Front USB"
									required
									onChange={e=>{
										setData({...data,FrontPanel_Front_USB:e.target.value});
									}}
								/>
								<br />
										<input
									className={classes.input}
									type="text"
									id="FrontAudioPorts"
									name="FrontAudioPorts"
									placeholder="Enter Front Audio Ports"
									required
									onChange={e=>{
										setData({...data,FrontPanel_FrontAudioPorts:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="BackPanel_PS_2"
									name="BackPanel_PS_2"
									placeholder="Enter BackPanel PS2"
									required
									onChange={e=>{
										setData({...data,BackPanel_PS_2:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="text"
									id="Rear_USB"
									name="Rear_USB"
									placeholder="Enter Rear USB"
									required
									onChange={e=>{
										setData({...data,BackPanel_Rear_USB:e.target.value});
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="number"
									id="RearAudioPorts"
									name="RearAudioPorts"
									placeholder="Enter Rear Audio Ports"
									required
									onChange={e=>{
										let RearAudioPorts = e.target.value;
										if(RearAudioPorts<0){
											alert('RearAudioPorts Cannot be a Negative number');
										}
										else if(RearAudioPorts>=0){
											setData({...data,BackPanel_RearAudioPorts:e.target.value});
										}
										
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="number"
									id="Rj45"
									name="Rj45"
									placeholder="Enter Rj45"
									required
									onChange={e=>{
										let Rj45 = e.target.value;
										if(Rj45<0){
											alert('Rj45 Cannot be a Negative number');
										}
										else if(Rj45>=0){
											setData({...data,BackPanel_Rj45:e.target.value});
										}
										
									}}
								/>
								<br />
								<input
									className={classes.input}
									type="number"
									id="SP_DIF"
									name="SP_DIF"
									placeholder="Enter SP_DIF"
									required
									onChange={e=>{
										let SP_DIF = e.target.value;
										if(SP_DIF<0){
											alert('SP_DIF Cannot be a Negative number');
										}
										else if(SP_DIF>=0){
											setData({...data,BackPanel_SP_DIF:e.target.value});
										}
										
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
						<input className={classes.btn} type="submit" value="Submit" onClick={handelSubmitBtn} />
					</form>
				</div>
			</div>
		</div>);


	}
	




	return <div>
		{form}
	</div> 
};

export default AddPreBuilt;
