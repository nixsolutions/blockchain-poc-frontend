<template>
    <ul class="pagination">
        <li class="pagination-item has-arrow is-disabled ">
            <a class="pagination-link " href="#">
                <i class="icon-ic-arrow-left pagination-icon"></i>
            </a>
        </li>
        <li class="pagination-item is-active"><a class="pagination-link" href="#">1</a></li>
        <li class="pagination-item "><a class="pagination-link" href="#">2</a></li>
        <li class="pagination-item"><a class="pagination-link" href="#">3</a></li>
        <li class="pagination-item has-dots"><a class="pagination-link" href="#">...</a></li>
        <li class="pagination-item"><a class="pagination-link" href="#">10</a></li>
        <li class="pagination-item has-arrow">
            <a class="pagination-link" href="#">
                <i class="icon-ic-arrow-right pagination-icon"></i>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Pagination"
    }
</script>

<style scoped>

</style>