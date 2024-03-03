const LS = localStorage
let arrayTasks = []
let selectedTaskId = null


window.addEventListener("load", () => {
    if (LS.getItem("taskList")) arrayTasks = JSON.parse(LS.getItem("taskList"))
    generateTaskList()
})


$("#btn-new-task").on("click", () => {
    selectedTaskId = null
    $("#modal-action-wrapper").addClass("bg-success").removeClass("bg-secondary")
    $("#btn-save-task").addClass("bg-success").removeClass("bg-secondary")
    $("#modal-action").text("Criar Nova Tarefa")
    $("#modal-task-title").val("")
    $("#modal-task-content").val("")
})


$("#btn-save-task").on("click", () => {
    let lastTaskId = Number(LS.getItem("lastTaskId"))
    let alert

    // The ID depends if a task is being created or edited.
    let task = {
        id: selectedTaskId ? selectedTaskId : lastTaskId + 1,
        title: $("#modal-task-title").val(),
        content: $("#modal-task-content").val()
    }

    // Creating New Task
    if (selectedTaskId == null) {
        arrayTasks.push(task)
        lastTaskId += 1
        LS.setItem("lastTaskId", lastTaskId)
        alert = createAlert("Tarefa Criada com sucesso!")
    } 
    // Editing Task
    else {
        for (let i = 0; i < arrayTasks.length; i++) {
            if (arrayTasks[i].id === selectedTaskId) arrayTasks[i] = task
        }
        alert = createAlert("Tarefa editada com sucesso!")
    }

    LS.setItem("taskList", JSON.stringify(arrayTasks))
    generateTaskList()
    $("#alert-container").empty().append(alert)
    alert.delay(2000).fadeOut(2000)
})


$("#btn-delete-task").on("click", () => {
    let task = {}
    let alert = createAlert("Tarefa excluída com sucesso!")

    for (let i = 0; i < arrayTasks.length; i++) {
        if (arrayTasks[i].id === selectedTaskId) task = arrayTasks[i]
    }

    arrayTasks.splice(arrayTasks.indexOf(task), 1)
    LS.setItem("taskList", JSON.stringify(arrayTasks))

    generateTaskList()
    $("#alert-container").empty().append(alert)
    alert.delay(2000).fadeOut(2000)
})


$('#modal-task').on('shown.bs.modal', () => {
    $('#modal-task-title').focus()
})


function generateTaskList() {
    $("#to-do-list").empty()

    for (let task of arrayTasks) {
        let accordionMaster = $("<div></div>").addClass("accordion m-3").attr("data-bs-theme", "dark")
        let accordionItem = $("<div></div>").addClass("accordion-item")

        let accordionHeader = $("<h2></h2>").addClass("accordion-header")
        let accordionBtn = $("<button></button>").text(task.title).addClass("accordion-button collapsed fw-semibold")
            .attr({
                "data-bs-toggle": "collapse",
                "data-bs-target": `#panelsStayOpen-collapse-${task.id}`,
                "aria-expanded": "true",
                "aria-controls": `panelsStayOpen-collapse-${task.id}`
            })

        let accordionPanel = $("<div></div>").addClass("accordion-collapse collapse").attr({
            "id": `panelsStayOpen-collapse-${task.id}`, 
            "data-bs-parent": "#to-do-list"         
        })
        let accordionBody = $("<div></div>").addClass("accordion-body").text(task.content)
        
        let accordionInnerButtons = $("<div></div>").addClass("d-flex gap-2 justify-content-end me-3 mb-3")
        let accordionInnerEditBtn = $("<button></button>").text("Editar").addClass("btn btn-secondary")
            .attr({
                "data-bs-toggle": "modal",
                "data-bs-target": "#modal-task"
            })
            .on("click", () => { editTask(task) })
        let accordionInnerDeleteBtn = $("<button></button>").text("Excluir").addClass("btn btn-danger")
            .attr({
                "data-bs-toggle": "modal",
                "data-bs-target": "#modal-delete"
            })
            .on("click", () => { deleteTask(task) })
        
        accordionHeader.append(accordionBtn)
        accordionInnerButtons.append(accordionInnerEditBtn, accordionInnerDeleteBtn)
        accordionPanel.append(accordionBody, accordionInnerButtons)
        accordionItem.append(accordionHeader, accordionPanel)
        accordionMaster.append(accordionItem)

        $("#to-do-list").append(accordionMaster)    
    }
}


function editTask(task) {
    selectedTaskId = task.id
    $("#modal-action-wrapper").addClass("bg-secondary").removeClass("bg-success")
    $("#btn-save-task").addClass("bg-secondary").removeClass("bg-success")
    $("#modal-action").text("Editar Tarefa")
    $("#modal-task-title").val(task.title)
    $("#modal-task-content").val(task.content)
}


function deleteTask(task) {
    selectedTaskId = task.id
    $("#modal-delete-task").text(task.title)
}


function createAlert(message) {
    let alert = $("<div></div>").addClass("alert alert-dark container-fluid mb-0 alert-dismissible fade show")
    let msg = $("<div></div>").text(message).addClass("fw-semibold")
    let closeBtn = $("<button></button>").addClass("btn-close")
    .attr({
        "data-bs-dismiss": "alert", 
        "aria-label": "Close"
    })

    alert.append(msg, closeBtn)
    return alert
}