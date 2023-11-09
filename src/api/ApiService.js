import AxiosInstance from "./AxiosInstance";

class ApiService {
  async getLoggedUser() {
    return {
      email: "bob@gmail.com",
      name: "Bob",
      role: "ADMIN", //RESTAURANT
    };
  }

  async getRestaurantAccounts() {
    return [
      {
        _id: 1,
        email: "restaurateur@gmail.com",
        name: "Le restaurateur",
      },
      {
        _id: 2,
        email: "restaurateur2@gmail.com",
        name: "Le restaurateur 2",
      },
    ];
  }

  async createRestaurantUser(restaurantUser) {
    /* const { data } = await AxiosInstance.post(`/restaurants`, {
      data: restaurantUser
    }); */
    return {
      _id: 1,
      email: "restaurateur@gmail.com",
      name: "Le restaurateur",
    };
  }
}

export default new ApiService();
