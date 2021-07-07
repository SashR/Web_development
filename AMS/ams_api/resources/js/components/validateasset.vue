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
            data-target="#validateAssetModal"
        >
            Validate
        </button>
        <div
            class="modal fade"
            id="validateAssetModal"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="validateBackdropLabel"
            aria-hidden="true"
        >
            <div
                class="modal-dialog cbpo-secondary"
                style="max-width: fit-content;"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="validateBackdropLabel">
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
                                <div class="form-group col-3">
                                    <select
                                        name=""
                                        id=""
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
                                <div class="form-group col-3">
                                    <select
                                        name=""
                                        id=""
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
                                <div class="form-group col-3">
                                    <select
                                        name=""
                                        id=""
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
                                <div class="form-group col-3">
                                    <select name="" id="" class="custom-select">
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
                                        class="form-control form-control-sm col-5"
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
                                <div class="row justify-content-end col-12">
                                    <button class="btn cbpo-primary">
                                        Validate
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
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
