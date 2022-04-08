find "./data/nh_01_Stockholms_lan_Sweref_99_TM_geotiff" -maxdepth 1 -type f -name '*.tif' | while read -r FILE
    do
       basefilename="$(basename $FILE)" 
	   echo "Geotransforming $basefilename"
       basefilename="$(echo $basefilename | sed 's/.tif/_WGS84.tif/g')"  
	   gdalwarp -overwrite -s_srs EPSG:3006 -t_srs EPSG:4326 -of GTiff "$FILE" "./data/nh_01_Stockholms_lan_WGS84_geotiff/${basefilename}"

done
