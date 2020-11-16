var editId,type,neighborlyUserId,neighborlyAccountId,prevNumber;
var pageReload = false;
$('.profileDetails').click(function(){
pageReload = false
var profile = JSON.parse(localStorage.getItem('profile'));
neighborlyAccountId = profile.neighborlyAccountId;
neighborlyUserId = profile.neighborlyUserId;
if(profile){
    $('.text-withedit').remove();
    $('#profileState option').remove();
    profileZipCodeValidate();
    phoneFormatter();
    getProfileState();
    setProfileName(profile);
    setProfileEmail(profile);
    setMultipleContact(profile);
    setMultipleaddress(profile);
    preferredContactFrequency(profile);
    $('.addlink').click(function(){
        $('.form_container_wrapperBox:first-child').hide();
        $('#js-popupModalDialog span.delete').css("display","none");

        if($(this).parents('.personal-box').hasClass('profilePhone')){
            $("#editPhone .top_txt h3").text('Add Phone');
            $('#editPhone').addClass('active');
            $('#phone1').val('');
            $('#phoneApplyBtn').attr('data-edit','');
            return;
        }
        if($(this).parents('.personal-box').hasClass('profileAddress')){
            $('#editAddress').addClass('active');
            $("#editAddress .top_txt h3").text('Add Address');
            clearAddressFormData();
            return;
        }
    })
    
    $('.profileBtn').off('click').on('click',function(){
        var profileBtnId = $(this).attr('id');
        editId = $(this).attr('data-edit');
        type="POST";
        switch(profileBtnId){
            case 'phoneApplyBtn':
                var number = $('#phone1').val();
                number = number.toString().replace(/[- )(]/g,'');
                if(prevNumber==number){
                    addProfilePoneNumber();
                }else{
                    if(number){
                        clearOtpVerification();
                        $("#editPhone").removeClass('active');
                        $('#generateOtp').addClass('active');
                        generateOtpNumber(neighborlyUserId,number);
                    }
                }
            break;
            case 'profileNameBtn':
                type="PUT";
                var payload = {
                    "neighborlyAccountId":neighborlyAccountId,
                    "firstName": $('#profileFName').val(),
                    "lastName": $('#profileLName').val()
                }
                callAddEDitApi(payload,apiConfig.profileApi,function(data,status) {
                    $("#editName").removeClass('active');
                    $('.form_container_wrapperBox:first-child').show();
                      updateProfile(profile.neighborlyUserId);
                },type); 
            break;    
            case 'profileAddressBtn':
                var address = $('#profileAddress').val();
                var address2 = $("#profileAddress2").val();
                var city = $("#profileCity").val();
                var zipCode  = $("#profileZipCode").val();
                let state = $("#profileState").val();   //.children(":selected").attr("id");
                var profileType = $("#profileType").val();
                var primaryCheckBox = function(){
                    if ($('#customCheck-nbAddress').is(':checked')) { return 1;}
                    return 0;

                }
                var payload  = {                  
                    "AddressLine1":address,
                    "AddressLine2":address2,
                    "Zip":zipCode,
                    "City":city,
                    "State":state,
                    "Country":"USA",
                    "PrimaryAddressID":primaryCheckBox(),
                    "AccountAddressTypeID":profileType
                }
                if(editId){
                  payload.NeighborlyAccountAddressId = editId;
                  type = "PUT";
                }else{
                    payload.NeighborlyAccountId = neighborlyAccountId;
                    type = "POST"; 
                }
                     payload.State= $("#profileState").children(":selected").attr("id");
                callAddEDitApi(payload,apiConfig.adddressApi,function(data,status) {
                     
                    $("#editAddress").removeClass('active');
                    $('.form_container_wrapperBox:first-child').show();
                    updateProfile(profile.neighborlyUserId);
                },type);
                break;
        }
    })


 }
});


function getMultipleData(itrator,mapper,elementConstructor,editHander){
$.each(itrator,function(index,value){
   var val = mapper(value); 
   elementConstructor(val,index);
});
editHander(itrator);
}


function setMultipleContact(profile){
    getMultipleData(profile.phone,function(value){
        return value
    },function(value,index){
        var phoneNumber = value.contactDetail.match(/(\d{3})(\d{3})(\d{4})/);
        if(phoneNumber != null){
           phoneNumber = "(" + phoneNumber[1] + ") " + phoneNumber[2] + "-" + phoneNumber[3];
        }else{
            phoneNumber = value.contactDetail;
        }
        $('.profilePhone .addlink').css("display","block");
        if(index===2){
            $('.profilePhone .addlink').css("display","none");
        }
        $('.profilePhone').append('<div class="text-withedit">'+
          '<div class="label-name">'+
              '<div class="labelTxtBox">'+
                  '<div class="labelTxt">'+phoneNumber+'</div>'+
                  (value.contactVerificationStatusId == 2 ?
                  '<div class="labelWithImg">'+
                      '<img src="/us/en-us/_assets/images/Shield-Outline.svg" alt="" />'+
                      '<img src="/us/en-us/_assets/images/register-icons/noun_Check.svg" alt="">'+
                  '</div>' : '')+
              '</div>'+
              (value.primaryPhoneID == 1 ? 
              '<div class="labelPrimary">'+
                  '<div class="primaryWithStar">'+
                      '<img src="/us/en-us/_assets/images/Gold-Star-Outline.svg" alt="">Primary'+
                  '</div>'+
              '</div>':'')+
          '</div>'+
          '<div class="editBox">'+
              '<a href="javascript:void(0)" class="link-btn editLink" data-attr="editPhone" data-index="'+index+'">Edit</a>'+
          '</div>'+
      '</div>'
      )
    },function(arrayVal){
        $(".profilePhone a.editLink").click(function() {
            $('#js-popupModalDialog span.delete').css("display","block");
            $("#editPhone .top_txt h3").text('Edit Phone');
            $('.form_container_wrapperBox:first-child').hide();
            var index = $(this).attr("data-index");
            var obj = arrayVal[index];
            prevNumber = obj.contactDetail;
            var phoneNumber = obj.contactDetail.match(/(\d{3})(\d{3})(\d{4})/);
            if(phoneNumber != null){
            phoneNumber = "(" + phoneNumber[1] + ") " + phoneNumber[2] + "-" + phoneNumber[3];
            }else{
                phoneNumber = obj.contactDetail;
            }
            $('#editPhone').addClass('active');
            $('#phoneApplyBtn').attr('data-edit',obj.neighborlyAccountContactId);
            $('#phone1').val(phoneNumber);
            $("#customCheck-nb10").prop("checked",obj.primaryPhoneID == 0 ? false : true);
            $('#editPhone .delete').attr("data-nblyPhoneId",obj.neighborlyAccountContactId);
            
        })
    })
}
function setMultipleaddress(profile){
    getMultipleData(profile.accountAddresses,function(value){
        return value;
    },function(value,index){
        $('.profileAddress .addlink').css("display","block");
        if(index===2){
            $('.profileAddress .addlink').css("display","none");
         }
          $('.profileAddress').append('<div class="text-withedit">'+
          '<div class="label-name">'+
              '<div class="labelTxtBox">'+
                  '<div class="address-head">'+
                  (value.accountAddressTypeID == 1 ? 'Residential' : 'Business' ) +
                  '</div>'+
                  '<div class="labelTxt">'+ (value.addressLine1 ? value.addressLine1 +'<br/>': '') +
                       (value.addressLine2 ? value.addressLine2 +'<br/>':'') + (value.city ? value.city +', ' : '') + value.state + ' '+value.zip +
               '</div>'+
              '</div>'+
              (value.primaryAddressID == 1 ? 
                '<div class="labelPrimary">'+
                    '<div class="primaryWithStar">'+
                        '<img src="/us/en-us/_assets/images/Gold-Star-Outline.svg" alt="">Primary'+
                    '</div>'+
                '</div>':'')+
          '</div>'+
          '<div class="editBox">'+
              '<a href="javascript:void(0)" class="link-btn editLink" data-attr="editAddress" data-index="'+index+'">Edit</a>'+
          '</div>'+
      '</div>'
      )
    },function(arrayVal){
        $(".profileAddress a.editLink").click(function() {
            $('#js-popupModalDialog span.delete').css("display","block");
            $("#editAddress .top_txt h3").text('Edit Address');
            $('.form_container_wrapperBox:first-child').hide();
            var index = $(this).attr("data-index");
            var obj = arrayVal[index];
            $('#editAddress').addClass('active');
            setFieldsValue(obj);
            $('#editAddress .delete').attr("data-nblyacntId",obj.neighborlyAccountAddressId);
        })
    })
}
function setProfileName(profile){
    $('.profileName').append('<div class="text-withedit profileName">'+
        '<div class="label-name">'+
            '<div class="labelTxtBox">'+
                '<div class="labelTxt">'+profile.firstName+ ' '+profile.lastName+'</div>'+
            '</div>'+
        '</div>'+
        '<div class="editBox">'+
            '<a href="javascript:void(0)" class="link-btn editLink" data-attr="editName">Edit</a>'+
        '</div>'+
    '</div>'
     )
     $('.profileName .editLink').click(function(){
        $('#profileFName').val(profile.firstName);
        $('#profileLName').val(profile.lastName);
        $('.form_container_wrapperBox:first-child').hide();
        $('#editName').addClass('active');
     })
}

function setProfileEmail(profile){
    $('.profileEmail').append('<div class="text-withedit primaryEmail">'+
        '<div class="label-name">'+
            '<div class="labelTxtBox">'+
                '<div class="labelTxt">'+profile.email+'</div>'+
            '</div>'+
            '<div class="primaryWithStar">'+
                '<img src="/us/en-us/_assets/images/Gold-Star-Outline.svg" alt="">Primary'+
            '</div>'+
        '</div>'+
    '</div>'
     )
}


function callAddEDitApi(payload,url,successHandler,type){
    $.ajax({
        url: url,
        data: JSON.stringify(payload),
        headers: {
         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('bearer_token')).access_token
        },
        type: type || "POST",
        contentType: "application/json",
        success: successHandler,
        error:function(xhr,status,error) {
            console.log(error);

        }
      });
    
}
$('#editAddress .delete').click(function(){
    var neighborlyAccountAddressId = $(this).attr('data-nblyacntId');
    var url = apiConfig.adddressApi +'/'+ neighborlyAccountAddressId ;
    $.ajax({
        url: url,
        headers: {
         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('bearer_token')).access_token
        },
        type: "DELETE",
        success: function(data,status){
            $("#editAddress").removeClass('active');
            $('.form_container_wrapperBox:first-child').show();
            updateProfile(neighborlyUserId);
        },
        error:function(xhr,status,error) {
            console.log(error);
        }
      });
})

$('#editPhone .delete').click(function(){
    var neighborlyAccountContactId = $(this).attr('data-nblyPhoneId');
    var url = apiConfig.editPhoneApi +'/'+ neighborlyAccountContactId ;
    $.ajax({
        url: url,
        headers: {
         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('bearer_token')).access_token
        },
        type: "DELETE",
        success: function(data,status){
            $("#editPhone").removeClass('active');
            $('.form_container_wrapperBox:first-child').show();
            updateProfile(neighborlyUserId);
        },
        error:function(xhr,status,error) {
            console.log(error);
        }
      });
})

function updateProfile(neighborlyUserId){
        $.ajax({
            url: apiConfig.profileApi + neighborlyUserId,
            headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('bearer_token')).access_token
            },
            type: "GET",
            success: function(data,status){
                $("body").find('header').removeClass('hideHeader');
                $('#js-popupModalDialog .popupModalbody').removeClass("padfingTop40");
                $('#js-popupModalDialog .closeDialogCont').show();
                $('#js-popupModalDialog .close.js-closePopUpModal').show();
                $('#js-popupModalDialog  #editPhone .top_txt .delete').show();
                $('.text-withedit').remove();
                localStorage.setItem('profile',JSON.stringify(data));
                var profile = JSON.parse(localStorage.getItem('profile'));
                getProfileState();
                setProfileName(profile);
                setProfileEmail(profile);
                setMultipleContact(profile);
                setMultipleaddress(profile);
                
            },
            error:function(xhr,status,error) {
                console.log(error);
            }
        });
}
function clearAddressFormData(){
    $('#profileAddress').val('');
    $("#profileAddress2").val('');
    $("#profileCity").val('');
    $("#profileZipCode").val('');
    $("#profileState").val('');
    //$("#profileType").val('');
    $('#profileAddressBtn').attr('data-edit','');
}
function setFieldsValue(value){
    $('#profileAddress').val(value.addressLine1);
    $("#profileAddress2").val(value.addressLine2);
    $("#profileCity").val(value.city);
    $("#profileZipCode").val(value.zip);
    $("#profileState").val(value.state);
    $("#profileType").val(value.accountAddressTypeID);
    $("#customCheck-nbAddress").prop("checked",value.primaryAddressID == 0 ? false : true);
    $('#profileAddressBtn').attr('data-edit',value.neighborlyAccountAddressId);

}

function getProfileState(){
    $.ajax({
        url:'https://nblytest.getsandbox.com/StatesList',
        dataType: 'json',
        type: 'GET',
        success:function(data,status) {
            var states = [];
            var resultArray = data.states;
            $.each(resultArray, function( index, resultArray ) {
              states.push('<option id="'+resultArray.abbreviation+'" value="'+resultArray.name+'">'+resultArray.name+'</option>')
            });
            $('#profileState').append(states);
          },
          error: function(error) {
            console.log(error);
        }
    });
}

$("#changePassword").click(function(){
    changePassword();
})


function generateOtpNumber(neighborlyUserId,number){
    var payload = {
        "NeighborlyUserId": neighborlyUserId,
        "ContactTypeId": 1,
        "userPhoneNumber": number,
        "OtpGenerateType": "sms"
      }
    $.ajax({
        url: apiConfig.editPhoneApi + '/GenerateOTP',
        data: JSON.stringify(payload),
        headers: {
         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('bearer_token')).access_token
        },
        type:"POST",
        contentType: "application/json",
        success: function(data,success){
            if(data.status =='Success'){
                validatePhoneNumber(data.neighborlyAccountOtpid);
            }
        },
        error:function(xhr,status,error) {
            console.log(error);
        }
      });
}

function validatePhoneNumber(neighborlyAccountOtpid){
    if(neighborlyAccountOtpid){
        $('.validatePhoneBtn').click(function(){
            var digit1 = $('#digit-1').val();
            var digit2 = $('#digit-2').val();
            var digit3 = $('#digit-3').val();
            var digit4 = $('#digit-4').val();
            var digit5 = $('#digit-5').val();
            var digit6 = $('#digit-6').val();
            var combineDigit = digit1+digit2+digit3+digit4+digit5+digit6;
            var payload  = {
                "NeighborlyAccountOtpid": neighborlyAccountOtpid,
                "ContactOtp":combineDigit
              }
            $.ajax({
                url: apiConfig.editPhoneApi + '/ValidateOTP',
                data: JSON.stringify(payload),
                headers: {
                 Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('bearer_token')).access_token
                },
                type:"POST",
                contentType: "application/json",
                success: function(data,success){
                    $('#generateOtp').removeClass('active');
                    if(data.status =='Success'){
                        if(!pageReload){
                            $('.form_container_wrapperBox:first-child').show();
                        }else{
                            $('#js-popupModalDialog').hide()
                        }
                        addProfilePoneNumber();
                    }
                },
                error:function(xhr,status,error) {
                    console.log(error);
                }
              });
        })
    }
}

function addProfilePoneNumber(){
    var primaryPhoneCheckBox = function(){
        if ($('#customCheck-nb10').is(':checked')) { return 1;}
        return 0;
    }

    var optInVal = function(){
        if ($('#customCheck-nb11').is(':checked')) { return 1;}
        return 0;
    }
       var contactphone =  $('#phone1').val()
    contactphone = contactphone.toString().replace(/[- )(]/g,'');

    var payload  = {
            "ContactTypeId":1,
            "ContactDetail":contactphone,
            "ContactVerificationStatusId":2,
            "PrimaryPhoneID":primaryPhoneCheckBox(),
            "isOptin":optInVal()
    }
    if(editId){
        payload.neighborlyAccountContactId = editId
        type = "PUT"
    }else{
        payload.NeighborlyAccountId = neighborlyAccountId;
        type ="POST"
    }
    
    callAddEDitApi(payload,apiConfig.editPhoneApi,function(data,status) {
        if(pageReload){
            $('.wlcmMsgModal').show();
        }
        else{
            $("#editPhone").removeClass('active');
            $('.form_container_wrapperBox:first-child').show();
        }
        updateProfile(neighborlyUserId);
    },type);
}

function clearOtpVerification(){
    $('#digit-1').val('');
    $('#digit-2').val('');
    $('#digit-3').val('');
    $('#digit-4').val('');
    $('#digit-5').val('');
    $('#digit-6').val('');
}

$('.digit-group').find('input').each(function() {
	$(this).attr('maxlength', 1);
	$(this).on('keyup', function(e) {
		var parent = $($(this).parent());
		
		if(e.keyCode === 8 || e.keyCode === 37) {
			var prev = parent.find('input#' + $(this).data('previous'));
			
			if(prev.length) {
				$(prev).select();
			}
		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
			var next = parent.find('input#' + $(this).data('next'));
			
			if(next.length) {
				$(next).select();
			} else {
				if(parent.data('autosubmit')) {
					parent.submit();
				}
			}
		}
	});
});

function preferredContactFrequency(profile){
    var communicationModeId = profile.CommunicationModeId;
    switch(communicationModeId){
        case 1:
        $(".prefered-option #phone").attr('checked', true);
        break;
        case 2:
        $(".prefered-option #standardContact").attr('checked', true);
        break;
        default:
        $(".prefered-option #EmailContact").attr('checked', true);

    }
    $('.prefered-option :radio[name="filter"]').change(function() {
        var radioVal = $(this).val();
        var payload = {
            "NeighborlyAccountId":neighborlyAccountId,
            "IsOptInForText":true,
            "IsOptInForEmail":false,
            "isOptInForNotification": true,
            "CommunicationModeId":radioVal
            }
        $.ajax({
            url: apiConfig.profileApi + 'OptInPreferences',
            data: JSON.stringify(payload),
            headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('bearer_token')).access_token
            },
            type:"PUT",
            contentType: "application/json",
            success: function(data,success){
                console.log(data);
    
            },
            error:function(xhr,status,error) {
                console.log(error);
            }
        });
    });
}


function phoneFormatter() {
    var inputs = document.querySelectorAll('[name="profilePhone"]');
    if(inputs){
        for (var i = 0; i < inputs.length; i++) {
            var element = inputs[i];
            element.addEventListener('input', function (e) {
                var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            });
        }
    }
}


function profileZipCodeValidate(){
    $("#profileZipCode").on('input',function () {
        var profileZipCode = $('#editAddress #profileZipCode').val();
        var zipRegex = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
        if(profileZipCode !== '' && zipRegex.test(profileZipCode)) {
            $('#profileAddressBtn').removeClass('disble-btn');
            $('#profileAddressBtn').attr("disabled",false);
        } else if(profileZipCode === '') {
            $('#profileAddressBtn').addClass('disble-btn');
            $('#profileAddressBtn').attr("disabled",true);
        } else if(!zipRegex.test(profileZipCode)) {
            $('#profileAddressBtn').addClass('disble-btn');
            $('#profileAddressBtn').attr("disabled",true);
        }
    });
}

$('.welContinue').click(function(){
    location.reload();
})