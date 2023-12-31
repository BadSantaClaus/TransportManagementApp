import axios from "axios";

const VEHICLE_BASE_URL = "http://localhost:8080/api/v1/vehicles";
const VEHICLE_FILTER_BRAND_URL = "http://localhost:8080/filter/brand";
const VEHICLE_FILTER_MODEL_URL = "http://localhost:8080/filter/model";
const VEHICLE_FILTER_CATEGORY_URL = "http://localhost:8080/filter/category";
const VEHICLE_FILTER_GOSNUMBER_URL = "http://localhost:8080/filter/gosNumber";
const VEHICLE_FILTER_YEAR_URL = "http://localhost:8080/filter/productionYear";
const VEHICLE_FILTER_TYPE_URL = "http://localhost:8080/filter/vehicleType";

class VehicleService {
    getVehicles() {
        return axios.get(VEHICLE_BASE_URL).catch((err) => {
            console.log(err)
        });
    }

    createVehicle(vehicle) {
        return axios.post(VEHICLE_BASE_URL, vehicle)
    }

    getVehicleById(vehicleId) {
        return axios.get(VEHICLE_BASE_URL + '/' + vehicleId)
    }

    updateVehicle(employee, vehicleId) {
        return axios.put(VEHICLE_BASE_URL + '/' + vehicleId, employee);
    }

    deleteVehicle(vehicleId) {
        return axios.delete(VEHICLE_BASE_URL + '/' + vehicleId);
    }

    getBrandFilter(filterPhrase) {
        return axios.get(VEHICLE_FILTER_BRAND_URL + '/' + filterPhrase);
    }
    getModelFilter(filterPhrase) {
        return axios.get(VEHICLE_FILTER_MODEL_URL + '/' + filterPhrase);
    }
    getCategoryFilter(filterPhrase) {
        return axios.get(VEHICLE_FILTER_CATEGORY_URL + '/' + filterPhrase);
    }
    getGosNumberFilter(filterPhrase) {
        return axios.get(VEHICLE_FILTER_GOSNUMBER_URL + '/' + filterPhrase);
    }
    getProductionYearFilter(filterPhrase) {
        return axios.get(VEHICLE_FILTER_YEAR_URL + '/' + filterPhrase);
    }
    getVehicleTypeFilter(filterPhrase) {
        return axios.get(VEHICLE_FILTER_TYPE_URL + '/' + filterPhrase);
    }
}

// eslint-disable-next-line
export default new VehicleService()