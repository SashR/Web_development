<template>
    <div>
        <!--add asset modal-->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
        />
        <button
            type="button"
            class="btn cbpo-primary"
            data-toggle="modal"
            data-target="#addAssetModal"
        >
            Add Asset
        </button>
        <div
            class="modal fade"
            id="addAssetModal"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div
                class="modal-dialog cbpo-secondary"
                style="max-width: fit-content;"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Add Asset
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div
                            class="block justify-content-center bg-light mt-4 p-3"
                        >
                            <form action="" class="row">
                                <div class="form-group col-4">
                                    <label for="asset_id" class="">
                                        Asset Tag/ID:
                                    </label>
                                    <input
                                        type="text"
                                        id="asset_id"
                                        class="form-control form-control-sm"
                                        v-model="asset_id"
                                        required
                                    />
                                </div>
                                <div class="form-group col-4">
                                    <label for="serial_no" class=""
                                        >Serial No:</label
                                    >
                                    <input
                                        type="text"
                                        id="serial_no"
                                        v-model="serial_no"
                                        class="form-control form-control-sm "
                                        required
                                    />
                                </div>
                                <div class="form-group col-4">
                                    <label for="ticket_no" class=""
                                        >Ticket No:</label
                                    >
                                    <input
                                        type="text"
                                        id="ticket_no"
                                        v-model="ticket_no"
                                        class="form-control form-control-sm "
                                        required
                                    />
                                </div>
                                <div class="form-group col-12">
                                    <label for="description" class=""
                                        >Description:</label
                                    >
                                    <input
                                        type="text"
                                        id="description"
                                        v-model="description"
                                        class="form-control form-control-sm "
                                        required
                                    />
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="status"
                                        v-model="status"
                                        class="custom-select"
                                        required
                                    >
                                        <option value="">--Status--</option>
                                        <option value="">In storage</option>
                                        <option value="">deployed</option>
                                        <option value="">broken</option>
                                        <option value="">stolen</option>
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name="type"
                                        id="type"
                                        v-model="type"
                                        class="custom-select"
                                        required
                                    >
                                        <option value="">--Type--</option>
                                        <option value=""
                                            >Laptop-Entry Level</option
                                        >
                                        <option value=""
                                            >Laptop-High End</option
                                        >
                                        <option value=""
                                            >Desktop-Entry Level</option
                                        >
                                        <option value=""
                                            >Desktop-High End</option
                                        >
                                        <option value="">Monitor</option>
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="financier"
                                        v-model="financier"
                                        class="custom-select"
                                        required
                                    >
                                        <option value="">--Financier--</option>
                                        <option value="debtin">DebtIn</option>
                                        <option value="capabilitybpo"
                                            >CapabilityBPO</option
                                        >
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="site"
                                        v-model="site"
                                        class="custom-select"
                                        required
                                    >
                                        <option value="">--Site--</option>
                                        <option value="delta_towers"
                                            >Delta Towers</option
                                        >
                                        <option value="musgrave"
                                            >Musgrave</option
                                        >
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="floor"
                                        v-model="floor"
                                        class="custom-select"
                                        required
                                    >
                                        <option value="">--Floor--</option>
                                        <option value="">2</option>
                                        <option value="">24</option>
                                        <option value="">25</option>
                                        <option value="">26</option>
                                    </select>
                                </div>
                                <div class="form-group col-4">
                                    <select
                                        name=""
                                        id="room"
                                        v-model="room"
                                        class="custom-select"
                                    >
                                        <option value="">--Room--</option>
                                        <option value="mitchells_park"
                                            >Mitchells Park</option
                                        >
                                        <option value="moses_mabida"
                                            >Moses Mabhiba</option
                                        >
                                        <option value="mitchells_park"
                                            >Mitchells Park</option
                                        >
                                        <option value="promenade"
                                            >Promenade</option
                                        >
                                    </select>
                                </div>
                                <div class="form-group col-3">
                                    <label for="bay" class="col-5">Bay:</label>
                                    <input
                                        type="text"
                                        id="bay"
                                        v-model="bay"
                                        class="form-control form-control-sm col-5"
                                    />
                                </div>
                                <div class="form-group col-3">
                                    <label for="workstation" class="col-5"
                                        >Workstation:</label
                                    >
                                    <input
                                        type="text"
                                        id="workstation"
                                        v-model="workstation"
                                        class="form-control form-control-sm col-5"
                                    />
                                </div>

                                <div class="form-group col-6">
                                    <label for="supplier_price"
                                        >Supplier Price:</label
                                    >
                                    <input
                                        type="number"
                                        id="supplier_price"
                                        v-model="supplier_price"
                                        class="form-control form-control-sm"
                                        required
                                    />
                                </div>
                                <div class="form-group col-4">
                                    <label for="date_received"
                                        >Date Received:</label
                                    >
                                    <input
                                        type="date"
                                        id="date_received"
                                        class="form-control form-control-sm"
                                        required
                                    />
                                </div>
                                <div class="form-group col-4">
                                    <label for="date_allocated"
                                        >Date Allocated:</label
                                    >
                                    <input
                                        type="date"
                                        id="date_allocated"
                                        class="form-control form-control-sm"
                                    />
                                </div>
                                <div class="col-4"></div>
                                <div class="form-group">
                                    <div
                                        class="alert alert-danger col-12"
                                        v-if="errors"
                                    >
                                        {{ errors }}
                                    </div>
                                    <div
                                        class="alert alert-success col-12"
                                        v-if="success"
                                    >
                                        {{ success }}
                                    </div>
                                </div>

                                <div class="row justify-content-end col-12">
                                    <button
                                        type="button"
                                        class="btn cbpo-primary"
                                        v-on:click="submitAdd()"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.block {
    width: 50vw;
    border: 1px solid whitesmoke;
    border-radius: 15px;
}

select {
    width: 80%;
}

.cbpo-primary {
    background-color: #071028 !important;
    color: whitesmoke !important;
}

.cbpo-secondary {
    color: #071028;
    background-color: whitesmoke;
}
</style>
<script>
export default {
    data() {
        return {
            asset_id: "",
            serial_no: "",
            ticket_no: "",
            description: "",
            status: "",
            type: "",
            financier: "",
            site: "",
            floor: "",
            room: "",
            bay: "",
            workstation: "",
            supplier_price: "",
            errors: "",
            success: ""
        };
    },
    methods: {
        submitAdd() {
            this.errors = "";
            console.log("function ran");
            console.log(this.asset_id);
            console.log(!this.asset_id);
            //console.log(this.validate());
            if (this.validate()) {
                console.log(this.asset_id, this.errors);
            }
        },
        validate: function(asset_id) {
            console.log("validate function");
            if (!asset_id) {
                this.errors = "Asset ID needs to be filled";
                console.log(this.errors);
                return true;
            } else {
                return false;
            }
        }
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
